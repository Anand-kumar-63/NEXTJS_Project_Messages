/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import ConnectDb from "@/app/lib/Dbconnect";
import UserModel from "@/app/models/user";
import { saveuser } from "@/app/helpers/savenewuser"; 
import { VerifyUser } from "@/app/helpers/Verifyuser";
// import '../../../types/next-auth';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",  
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
          username:{label:"username",type:"text"}
        },
      // this authorise function will take the credentials and returns the user or the specific error
      async authorize(credentials: any): Promise<any> {
        await ConnectDb();
        try {
          const identifier =  credentials.email || credentials.password
          const user = await UserModel.findOne({
            $or: [
              { email: identifier },
              { username: identifier },
            ],
          });
          if (!user) {
          // have to create a mockrequest in json format to give it to saveuser
            const mockrequest = {             
                username:credentials.username,
                email:credentials.email,
                password:credentials.password,
            };
            const newuser = saveuser(mockrequest);
            console.log(newuser);
            return newuser;
          }
          // if (!user.isverified) {
          //   // VerifyUser({username:credentials.username , password:credentials.password , email:credentials.email});
          //   // throw new Error("Please verify your account before logging in");
          // }
          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (isPasswordCorrect) {
            return user;
          } else {
            throw new Error("Incorrect password");
          }
        } catch (error) {
          throw new Error(`Error occured in reuqest handler${error}`);
        }
      },
    }),
  ],
  // The callbacks are async functions that NextAuth calls at specific points during the authentication process. You can use them to modify behavior, data, or add logic
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token._id = user._id?.toString(); // Convert ObjectId to string
        token.isVerified = user.isverified;
        token.isAcceptingMessages = user.isAcceptingMessages;
        // token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user._id = token._id;
        session.user.isverified = token.isverified;
        session.user.isAcceptingMessages = token.isAcceptingMessages;
        session.user.username = token.username;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/sign-in",
  },
};
