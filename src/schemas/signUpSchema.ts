import {z} from 'zod';
export const usernameValidation=z.string().min(2,"userName must be two charcters").max(20,"length exceeded");
export const signUpSchema=z.object({
    username:usernameValidation,
    email:z.string().email({message:"Invalid email"}),
    password:z.string().min(6,"password must be 6 characters").max(20,"length exceeded")
})