import {z} from 'zod';
export const messageSchema=z.object({
content:z.string().min(10,"content must be 10 characters").max(300,"length exceeded")

})