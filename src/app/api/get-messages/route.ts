import UserModel from "@/app/models/user";
import ConnectDb from "@/app/lib/Dbconnect";
import { getServerSession } from "next-auth";
// import { AuthOptions } from "next-auth";
import { User } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import mongoose from "mongoose";


export async function GET(request:Request){
    await ConnectDb();
    const session = await getServerSession(authOptions);
    const _user:User = session?.user as User;
    if(!session || !session.user){
        return Response.json({
            success:false,
            message:"User not Authorized",
        },{
            status:401
        })
    }
    // the userid return by the session is in the string form..
    // you have to explicitly make the string id to object id when wokring with agrregation pipelines..
    const userId = new mongoose.Types.ObjectId(_user._id);
    try{
    const data = await UserModel.aggregate([
        {$match:{_id:userId}},
        {$unwind:"$messages"},
        {$sort:{'messages.createdAt':-1}},
        {$group:{messages:{$push:'messages'}}},
    ]).exec();
    //this mongodb query will return you an array of js objects 
    console.log(data);
    if(!data || !data.length){
      return Response.json({
        success:false,
        message:"user not valid"
      },{
        status:402
      })
     }
     return Response.json({
        success:true,
        messages:data[0].messages
     },{
        status:201
     })
    }catch(error){
        return Response.json({
            success:false,
            message:"Error:failed to get-messages"
        },{
            status:401
        })
    }
}