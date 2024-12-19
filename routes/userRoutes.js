import userController from "../controllers/userController.js";
import { Router } from "express";

const userRouter = Router()

userRouter.route('/register').put(userController.register)

export default userRouter