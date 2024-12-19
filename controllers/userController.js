import userModel from "../models/userModel.js";

const userController = {
    register : async (req, res) => {
        const {name, username, password} = req.body
        console.log(name, username, password)
    }
}

export default userController