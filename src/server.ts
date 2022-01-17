import express, {Request, Response} from "express";
import dotenv from "dotenv";
import cors from 'cors';
import {router} from "./router/router";
import {mongoDbConnect} from './database/mongoDB';


dotenv.config();
mongoDbConnect();
const server = express();

server.use(express.json());
server.use(router);
server.use(cors());

server.use("/ping",(req:Request, res:Response)=>{
    res.status(200).json({message: "pong"})
})

server.use((req:Request, res:Response)=>{
    res.status(404).json({message: "Endpoint not found"});
})

server.listen(process.env.PORT || 4000)











//mongodb+srv://root:<password>@api.cc0od.mongodb.net/myFirstDatabase?retryWrites=true&w=majority