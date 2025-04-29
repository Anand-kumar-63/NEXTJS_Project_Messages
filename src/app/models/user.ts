import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document{
  content: string;
  createdAt: Date;
}

const MessageSchema: Schema<Message> = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

export interface User extends Document{
    username:string,
    email:string,
    password:string,
    verifyCode: string;
    verifyCodeExpiry:Date,
    isverified:boolean,
    isAcceptingMessages:boolean,
    message:Message[];
}

const UserSchema: Schema<User> = new mongoose.Schema({
    username: {
      type: String,
      required: [true, 'Username is required'],
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    //   use regex to validate the email
      match: [/.+\@.+\..+/, 'Please use a valid email address'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    verifyCode: {
      type: String,
      required: [true, 'Verify Code is required'],
    },
    verifyCodeExpiry: {
      type: Date,
      required: [true, 'Verify Code Expiry is required'],
    },
    isverified: {
      type: Boolean,
      default: false,
    },
    isAcceptingMessages: {
      type: Boolean,
      default: true,
    },
    message:[MessageSchema],
});
  
// Nextjs doesn't know if the application is bootingup firsttime or The application is already being booted nextjs works on egde 
// so we have to check for the model if already exists in the database or if the user model doesnt exist so make the new one and use it
const UserModel = (mongoose.models.User as mongoose.Model<User>) ||  mongoose.model<User>('User', UserSchema);
export default UserModel; 