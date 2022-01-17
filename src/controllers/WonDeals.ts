import axios from "axios";
import {Request, Response} from "express";
import dotenv from "dotenv";
import {url_api} from "../config/pipedrive"

dotenv.config();

export const WonDeals = async (req:Request, res: Response) => {
    try {
        const won = await axios.get(`https://api.pipedrive.com/v1/deals?status=won&start=0&api_token=${process.env.PIPEDRIVE_API_KEY}`,{responseType: 'json'});
        //console.log(won)
        return res.json([won.data])


    } catch (error) {
        console.log(error);
    }
}
