// import UserModel from "../models/user";
// import ConnectDb from "../lib/Dbconnect";

// interface IForm{
//     email:String
//     password:String
// }
// export async function LoginCheck(Userdata:IForm){
//    await ConnectDb()
//    const {email , password} = Userdata;
//   try{ const user = await UserModel.findOne({email});
//    if(!user){
//       return Response.json({
//         message:'user not valid'
//       })
//     }
//    const jwttoken = 


//    }
//    catch(error:any){
//     throw new Error("User is not valid",error)
//    }
// }