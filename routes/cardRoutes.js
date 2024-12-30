import cardController from "../controllers/cardController.js";
import { Router } from "express";

const cardRouter = Router()

cardRouter.route('/:tableId/:listId/card').post(cardController.createCard)


export default cardRouter