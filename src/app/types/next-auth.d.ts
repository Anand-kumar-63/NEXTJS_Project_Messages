    // This is a TypeScript feature that allows you to augment (extend) existing module types — in this case, the 'next-auth' module.
    import 'next-auth';
    // import { DefaultSession , DefaultUser } from 'next-auth';
    // - This line imports the **types** from the `next-auth` module.
    declare module 'next-auth'
    {
    // - You're **extending the `User` interface** that `next-auth` uses internally.
        interface User{
            _id?:string;
            isverified?:boolean;
            isAcceptingMessages?:boolean;
            username?:string
        }

        interface Session{
            user:{
                _id?:string, 
                isverified?:boolean,
                isAcceptingMessages?:boolean,
                username?:string
            }& DefaultSession['user'];
        }
    }

    declare module "next-auth/jwt"{
        interface JWT{
            _id?:string,
            isverified?:boolean,
            isAcceptingMessages?:boolean,
            username?:string
        }
    }

    // - You're **extending the `User` interface** that `next-auth` uses internally.
    // - `next-auth` normally defines a default `User` interface with very basic fields (like `name`, `email`, `image`, etc.).
    // - You're adding your own custom fields:
    //   - `_id` (optional)
    //   - `isVerified` (boolean)
    //   - `isAcceptingMessages` (boolean)
    //   - `username` (string)
    // So now, **wherever `next-auth` uses `User`** (like in sessions or callbacks), **TypeScript will recognize and allow** these new fields you've defined.
    // ### ✅ Why do this?
    // Let's say in your app, your user model in the database has extra fields (like `isVerified`, `username`, etc). You **want those fields to be available in [`session.user` or `token.user`**] in `next-auth`. This declaration tells TypeScript to **expect** those fields.
    // ### 🧠 Summary:
    // You’re customizing the `User` type from `next-auth` to match your own backend user schema. It’s purely for **type safety and intellisense** in TypeScript — it doesn’t change the runtime behavior.
