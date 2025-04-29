// import resend from "../lib/Dbconnect";
import VerificationEmail from "../../../email/verificationemail";
import  APiresponse  from "../types/ApiRespnse";
// import { messageSchema } from "../Schemas/messageSchema";
import { Resend } from 'resend';
export const resend = new Resend("re_e76fi5Cv_DNZKZsgh3g8mRX48JB1A2ZxA");

export async function SendVerificationEmail(
  Email: string,
  username: string,
  verificationcode:string
): Promise<APiresponse> {
  try {
      const{data} = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: Email,
      subject: "Verifiction code is here!",
      react: VerificationEmail({username , otp:verificationcode}),
    });
    console.log(data);
    console.log("No error in sending verification code");
    return {success: true, message: "verification code is send succesfully" };
  } catch (error) {
    console.log("ERROR sending verification email:" + error);
    return { success: false, message: "failed to send verification Email" };
  }
}