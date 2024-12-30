import tableController from "../controllers/tableController.js";
import { Router } from "express";

const tableRouter = Router()

tableRouter.route('/table').post(tableController.createTable)


export default tableRouter