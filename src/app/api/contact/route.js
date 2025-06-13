import { v4 as uuidv4 } from "uuid";
import { db } from "@/lib/firebase-admin"; // Pastikan ini sudah disiapkan
import { successResponse, ApiError, catchHandler } from "@/lib/ApiHelper"; // Reuse helper seperti di contoh `career`
import { z } from "zod";

// Validasi input menggunakan Zod
const ContactFormSchema = z.object({
  name: z.string().min(1, "Nama wajib diisi"),
  email: z.string().email("Email tidak valid"),
  message: z.string().min(1, "Pesan tidak boleh kosong")
});

// Handler untuk metode POST
export async function POST(req) {
  try {
    const body = await req.json().catch(() => {
      throw new ApiError(400, "Payload JSON tidak valid");
    });

    const data = {
      id: `msg-${uuidv4()}`,
      createdAt: new Date().toISOString(),
      ...body
    };

    try {
      ContactFormSchema.parse(data);
    } catch (validationError) {
      throw new ApiError(400, "Data yang diberikan tidak valid");
    }

    try {
      await db.ref(`contact-messages/${data.id}`).set(data);
    } catch (dbError) {
      throw new ApiError(500, "Gagal menyimpan ke database");
    }

    return successResponse(200, "Pesan berhasil dikirim", data);
  } catch (error) {
    return catchHandler(error);
  }
}
