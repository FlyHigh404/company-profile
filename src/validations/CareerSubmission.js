import { z } from "zod/v4";

export const CareerSubmissionValidation = z
	.object({
		id: z.string().min(1).max(100),
		createdAt: z.iso.datetime(),

		name: z.string().min(1).max(200),
		email: z.string().min(1).max(1000),
		phone: z.string().min(1).max(100),
		linkedin: z.string().min(1).max(1000),
		github: z.string().min(1).max(1000),
		cv: z.string().min(1).max(1000),
		portfolio: z.string().min(1).max(1000),
		reason: z.string().min(1).max(5000),

		career: z.object().optional()
	})
	.strict();
