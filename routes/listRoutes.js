import listController from "../controllers/listController.js";
import { Router } from "express";

const listRouter = Router()

listRouter.route('/:tableId/list').post(listController.createList)


export default listRouter