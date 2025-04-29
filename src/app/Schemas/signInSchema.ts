import {z} from "zod"

export const SignInSchema = z.object({
    Email: z.string(),
    password: z.string()
})