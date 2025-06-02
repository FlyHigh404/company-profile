import { z } from "zod/v4";

export const CareerSubmissionValidation = z
	.object({
		id: z.string().min(1).max(100),
		createdAt: z.iso.datetime(),

		name: z.string().min(1).max(100),
		email: z.email().max(200),
		phone: z.string().min(1).max(20),
		linkedin: z.url().max(200),
		github: z.url().max(200),
		cv: z.url().max(200),
		portfolio: z.url().max(200),
		reason: z.string().min(1).max(5000),

		career: z.object().optional()
	})
	.strict();
