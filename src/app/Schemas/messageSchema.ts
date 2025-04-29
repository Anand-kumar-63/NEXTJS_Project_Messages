import { z } from 'zod'

export const messageSchema = z.object({
  content:z.string().min(10,'content should be minimum length of 10 characters')
  .max(100,'content should include maximum of 100 characters'),
})