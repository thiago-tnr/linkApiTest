import { Request, Response } from "express";
import axios from "axios";
import { url_api } from "../config/pipedrive";
import dotenv from "dotenv";

dotenv.config();


export const Deals = async (req: Request, res:Response) => {
    try {
        const Api = await axios.get(`${url_api}/deals?api_token=${process.env.PIPEDRIVE_API_KEY}`);
        return res.json(Api.data)
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Something is wrong' });
    }
}