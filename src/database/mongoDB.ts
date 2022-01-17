import {connect} from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const mongoDbConnect =async () => {
    try {
       await connect(process.env.MONGO_URL as string);
        console.log("Connect")
    } catch (error) {
        console.log(error)
    }
}
