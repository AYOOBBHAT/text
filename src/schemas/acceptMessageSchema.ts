import {z} from 'zod';
export const AcceptMessageSchema=z.object({
    acceptsMessages:z.boolean()
})