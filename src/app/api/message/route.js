import { db } from "@/lib/firebase-admin";
import { v4 as uuidv4 } from "uuid";
import { QuickMessageValidation } from "@/validations/QuickMessage";
import { successResponse, ApiError, catchHandler } from "@/lib/ApiHelper";

/*
 * POST Quick Message
 */

export async function POST(req) {
	try {
		const rawBody = await req.json().catch(() => {
			throw new ApiError(400, "Invalid JSON payload");
		});

		const data = {
			id: `msg-${uuidv4()}`,
			createdAt: new Date().toISOString(),
			...rawBody
		};

		try {
			QuickMessageValidation.parse(data);
		} catch (validationError) {
			throw new ApiError(400, "Invalid data provided");
		}

		try {
			await db.ref(`quick-messages/${data.id}`).set(data);
		} catch (dbError) {
			throw new ApiError(500, "Database operation failed");
		}

		return successResponse(201, "Message saved successfully", data);
	} catch (error) {
		return catchHandler(error);
	}
}
