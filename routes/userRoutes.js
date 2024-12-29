import userController from "../controllers/userController.js";
import { Router } from "express";

const userRouter = Router()

userRouter.route('/register').post(userController.register)
userRouter.route('/login').post(userController.login)

export default userRouter