import bcrypt from "bcryptjs";
import ConnectDb from "../lib/Dbconnect";
import UserModel from "../models/user";

interface IUser {
  username: string;
  email: string;
  password: string;
}
export async function saveuser(userData: IUser) {
  await ConnectDb();
  const { username, password, email } = userData;
  const hashedPassword = await bcrypt.hash(password, 10);
  const expiryDate = new Date();
  expiryDate.setHours(expiryDate.getHours() + 1);
  const verifycode = Math.floor(10000 + Math.random() * 90000).toString();
  const user = new UserModel({
    username: username,
    email: email,
    password: hashedPassword,
    verifyCode: verifycode,
    verifyCodeExpiry: expiryDate,
    isAcceptingMessages: false,
    messages: [],
  });
  await user.save();
  return user;
}
