import { Router } from "express";
import * as Deals from "../controllers/Deals"
import * as WonDeals from "../controllers/WonDeals"
import  * as Order from "../controllers/Order"

export const router = Router();

router.get('/deals', Deals.Deals);
router.get('/deals/won', WonDeals.WonDeals);

router.post('/order', Order.SaveNewOrder)