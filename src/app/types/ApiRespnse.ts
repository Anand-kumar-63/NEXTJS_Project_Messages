
import { Message } from "../models/user"
export default interface APiresponse{
    success:boolean
    message:string,
    isAcceptingMessages?:boolean,
    messages?:Array<Message>
}