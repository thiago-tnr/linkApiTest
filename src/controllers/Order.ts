import Orderschema from "../models/solicitation";
import { Request, Response } from "express";
import {ordersBling} from "../models/createOrder"


export const SaveNewOrder = async (req: Request, res:Response) => {
    ordersBling;
    const {numero, idPedido, codigos_rastreamento,volumes} = req.body;
    const order = ({
        numero,
        idPedido,
        codigos_rastreamento,
        volumes
    })

    try {
        await Orderschema.create(order)
    } catch (error) {
        res.status(500).json({error})
    }
}