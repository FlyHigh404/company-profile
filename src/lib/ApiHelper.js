import { NextResponse } from "next/server";

export class ApiError extends Error {
	constructor(statusCode = 500, message = "Internal Server Error") {
		super(message);
		this.statusCode = statusCode;
	}
}

export function successResponse(statusCode = 200, message = "Operation successful", data = null) {
	const res = {
		statusCode,
		success: true,
		message,
		data
	};
	if (data) res.data = data;

	return NextResponse.json(res, { status: statusCode });
}

export function errorResponse(statusCode = 500, message = "Internal Server Error", details = null) {
	const res = {
		statusCode,
		success: false,
		message
	};
	if (details) res.details = details;

	return NextResponse.json(res, { status: statusCode });
}

export function catchHandler(error) {
	if (error instanceof ApiError) {
		return errorResponse(error.statusCode, error.message, error.details);
	}

	console.log("__Unexpected error__ :", error);
	return errorResponse(500, "Internal Server Error");
}
