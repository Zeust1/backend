import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userController = {
    register : async (req, res) => {
        const {name, email, phoneNumber, userName, password} = req.body
        const hashPassword = bcrypt.hashSync(password,process.env.SALT)
        try {
            await userModel.syncIndexes()
            const newUser = await userModel.create({
                name,
                email,
                phoneNumber,
                userName,
                hashPassword: hashPassword
            })
            if(!newUser) throw new Error('Account creation failed')
            res.status(200).send('Account created successfully')
        } catch (error) {
            if(error.code === 11000 && error.keyValue.userName)
            res.status(400).send(`userName already exists`)
            if(error.code === 11000 && error.keyValue.email)
            res.status(400).send(`email already exists`)
            if(!error.code === 11000)
            res.status(401).send(error.message)
        }
    },
    login: async (req, res) => {
        const {userName, password} = req.body
        const getToken = req.headers['authorization']
        try {
            const validUserName = await userModel.findOne({userName: userName})
            if(!validUserName) throw new Error('username or password is incorrect')
            const validPassword = bcrypt.hashSync(password, process.env.SALT)
            if(validUserName.hashPassword !== validPassword) throw new Error('username or password is incorrect')
            const token = await jwt.sign({
                name: validUserName.name,
                email: validUserName.email,
                phoneNumber: validUserName.phoneNumber
            }, process.env.SECRETKEY, {expiresIn: '2h'})
            res.setHeader("Authorization", `Bearer ${token}`);
            res.status(200).send('Login successfully')
            console.log(getToken)
        } catch (error) {
            res.status(401).send(error.message)
        }
    }
}

export default userController