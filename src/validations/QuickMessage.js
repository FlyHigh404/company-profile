import { z } from "zod/v4";

export const QuickMessageValidation = z
	.object({
		id: z.string().min(1).max(100),
		createdAt: z.iso.datetime(),
		email: z.email().max(200),
		name: z.string().min(1).max(100),
		message: z.string().min(1).max(5000)
	})
	.strict();
