import ConnectDb from "@/app/lib/Dbconnect";
import UserModel from "@/app/models/user";
// import { AuthOptions } from "next-auth";
import { getServerSession } from "next-auth";
import { User } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";

export async function POST(request: Request) {
  await ConnectDb();
  const session = await getServerSession(authOptions);
  console.log(session)
  const user: User = session?.user as User;
  if (!session || !session.user) {
    return Response.json(
      {
        succes: false,
        message: "user not authenticated",
      },
      {
        status: 400,
      }
    );
  }
  const { reqAcceptingmessage } = await request.json();
  const userId = user._id;
  try {
    const updateuser = await UserModel.findByIdAndUpdate(
      userId,
      {
        isAcceptingMessages: reqAcceptingmessage,
      },
      {
        new: true,
      }
    );

    if (!updateuser) {
      return Response.json(
        {
          succes: false,
          message: "user not found",
        },
        {
          status: 401,
        }
      );
    }
  } catch (error) {
    return Response.json({
        succes:false,
        message:"Error in modifying Accepting message status"
    },{
        status:404
    })
  }
}
