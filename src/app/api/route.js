import { successResponse } from "@/lib/ApiHelper";

/**
 * Health Check
 */

export async function GET() {
	return successResponse(200, new Date().toISOString());
}
