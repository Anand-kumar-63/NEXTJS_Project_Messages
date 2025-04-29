import UserModel from "@/app/models/user";
import ConnectDb from "@/app/lib/Dbconnect";
import {Message} from "../../models/user";

export async function POST(request:Request){
    await ConnectDb();
    const {username , content} = await request.json();
try{
    const user = await UserModel.findOne({username});
    if(!user){
        return Response.json({
            success:false,
            message:"Accepting User not valid"
        },
        {status:402});
    }
    // check if user is accepting messages or not
    if(!user.isAcceptingMessages){
        return Response.json({
            success:false,
            message:"User notAccepting messages"
        },{
            status:402
        });
    }
    //
    const newmessage =  { content , createdAt: new Date()};
    // push newmessage to user message's array
    user.message.push(newmessage as Message);
    await user.save();
    return Response.json({
        success:false,
        message:"Messages send"
    },
    {status:201});
    }catch(error){
        console.log("error in sending the messages")
        return Response.json({
            success:false,
            message:"Error : Sending messages failed"
        },{
            status:401
        })
    }
}