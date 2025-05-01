import Dbconnect from '../../lib/Dbconnect'
import UserModel from '@/app/models/user'
import {z} from 'zod'
import { usernameValidation } from '@/app/Schemas/SignupSchema'

const usernamequesrySchema = z.object({
    username:usernameValidation
})
export async function GET(request:Request){
    await Dbconnect();
    try{
    const { searchParams } = new URL(request.url);
    const queryparams = {
        username:searchParams.get('username')
    } 
    console.log(queryparams);

    const result = usernamequesrySchema.safeParse(queryparams);
    // console.log(result);

    if(!result.success){
      const usernameerrors = result.error?.format().username?._errors || []
      console.log(usernameerrors);
      return Response.json({
           success:false,
           message:usernameerrors.join(' & ') || usernameerrors,
      })
    }

    const {username} = result.data;
    const Isuser = await UserModel.findOne({username});
    if(Isuser){
       return Response.json({
        success:false,
        message:"Username already exist"
       },{
        status:400
       })
    }
    return Response.json({
        success:true,
        message:"username is unique"
     },{
        status:201,
     })
    }catch(error){
        console.log("error in checking the username",error);
        return Response.json({
            succes:false,
            message:"Error in checking the username"
        },{
            status:400
      })
   }
}