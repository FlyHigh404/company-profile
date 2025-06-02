import { successResponse } from "@/lib/responses";

/**
 * Health Check
 */

export async function GET() {
	return successResponse(200, new Date().toISOString());
}
