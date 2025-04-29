import ConnectDb from "@/app/lib/Dbconnect";
import UserModel from "@/app/models/user";
import bcrypt from "bcryptjs";
import { SendVerificationEmail } from "@/app/helpers/sendverificationemail";

export async function VerifyUser(userdata:any){
     await ConnectDb();
    try{
      const { username,email,password } = userdata;

      //finding user using username
      const findinguserverifiedusingusername = await UserModel.findOne({
        username,
        isVerified:true
    })
      if(findinguserverifiedusingusername){
        Response.json({
            succes:false,
            message:"User already exists"
        },{
            status:201
        })
      }
    // finding user using email
    const verifyuserusingEmail = await UserModel.findOne({email})
    const verifycode = Math.floor(10000+Math.random()*90000).toString();
    if(verifyuserusingEmail){
        if(verifyuserusingEmail.isverified){
            Response.json({
                succes:false,
                message:"USer already exists and verified"
            },{status:200})
        }
        else{
            // write the code to verify the user
            const hashedPassword = await bcrypt.hash(password,10);
            verifyuserusingEmail.password = hashedPassword;
            verifyuserusingEmail.verifyCode = verifycode;
            verifyuserusingEmail.verifyCodeExpiry  = new Date(Date.now()+360000);
            await verifyuserusingEmail.save();
            return Response.json({
              succes:false,
              messsage:"user exist but not verified"
            },{
                status:202
            })
        }
        }
        // if the user is not in the db we have to create one and save it in the db        
        else{
            const hashpawword = await bcrypt.hash(password , 10);
            const expiryDate = new Date();
            expiryDate.setHours(expiryDate.getHours() + 1);
            const Newuser = new UserModel({
                username:username,
                email:email,
                password:hashpawword,
                verifyCode:verifycode,
                verifyCodeExpiry:expiryDate,
                isvisAcceptingMessages:true,
                Messages:[],
            })
            await Newuser.save();
            return Response.json({
                succes:false,
                message:"new user created and not verified",
                user:Newuser
            },{
                status:201
            })
        }
      
        // send Verifiaction code to verify the user..
        const Emailresponse = await SendVerificationEmail(username,verifycode,email)
        if(Emailresponse.success){
             return Response.json({
            success:true,
            message:"user registerd Succesfully verify your account"
             },{
                status:500
             })
        }
        else{
            return Response .json({
                 success:false,
                 message:Emailresponse.message
            },{
                status:400
            })
        }
    }
    catch(error){
        console.error("Error in registerig the user :",error);
           Response.json({
            succes:false,
            message:"Error is registering  the user"
           })
    }
}