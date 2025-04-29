import {z} from 'zod';

export const usernameValidation = z
.string()
.min( 2 , "Username must be atleast 2 chararcters")
.max(20 , 'Username must be not more than 20 characters')
.regex(/^[a-zA-Z0-9._-]+$/
,"Username must contain special characters");

export const signUpSchema = z.object({
    username : usernameValidation,
    email:z.string().email({message:'Invalid email address'}),
    password:z
    .string()
    .min(6 , {message : 'password must be at least 6 characters'})
})
//This is a Zod validation schema meant to:
// Validate user input on the frontend (e.g., in a form)
// Or validate incoming data on the backend (e.g., API request body)

//this does not define a database model or schema like Mongoose or Prisma would.
