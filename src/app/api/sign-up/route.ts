import { NextResponse, NextRequest } from "next/server";
import { saveuser } from "@/app/helpers/savenewuser";
// import { messageSchema } from "@/app/Schemas/messageSchema";

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const user = await saveuser(json);
    if (user) {
      console.log(user);
      return NextResponse.json(
        {
          message: "User is saved successfully",
          data:user,
          ok:true
        },
        {
          status: 200,
        }
      );
    } else {
      return NextResponse.json(
        {
          error: "Error is saving the user",
          ok:false
        },
        {
          status: 401,
        }
      );
    }
  } catch (err: any) {
    console.log(err);
    return NextResponse.json(
      {
        error: err.message || "internal server error",
        ok:false
      },
      {
        status: 400,
      }
    );
  }
}
