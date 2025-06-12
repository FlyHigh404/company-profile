import { db } from "@/lib/firebase-admin";
import { v4 as uuidv4 } from "uuid";
import { CareerSubmissionValidation } from "@/validations/CareerSubmission";
import { successResponse, ApiError, catchHandler } from "@/lib/ApiHelper";

/*
 * POST Career Submission
 */

export async function POST(req) {
	try {
		const body = await req.json().catch(() => {
			throw new ApiError(400, "Invalid JSON payload");
		});

		const data = {
			id: `crr-${uuidv4()}`,
			createdAt: new Date().toISOString(),
			...body
		};

		try {
			CareerSubmissionValidation.parse(data);
		} catch (validationError) {
			throw new ApiError(400, "Invalid data provided");
		}

		try {
			await db.ref(`career-submissions/${data.id}`).set(data);
		} catch (dbError) {
			throw new ApiError(500, "Database operation failed");
		}

		return successResponse(201, "Career Submission saved successfully", data);
	} catch (error) {
		return catchHandler(error);
	}
}
