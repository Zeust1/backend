import cardDetailController from "../controllers/cardDetailModel.js";
import { Router } from "express";

const cardDetailRouter = Router()

cardDetailRouter.route('/:tableId/:listId/:cardId/cardDetail').post(cardDetailController.createCardDetail)


export default cardDetailRouter