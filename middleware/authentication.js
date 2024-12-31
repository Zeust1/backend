import jwt from 'jsonwebtoken'

const authentication = {
    authen: async (req, res, next) => {
        const { access_token } = req.query
        jwt.verify(access_token, process.env.SECRETKEY, (err, decoded) => {
            if(err) {
                return res.status(401).json({ message: 'Access token is invalid' });
            }else {
                next()
            }
        })
    }
}

export default authentication