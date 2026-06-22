import jwt from 'jsonwebtoken'

const authMiddleware = async (req, res, next) => {

    const token = req.cookies.token;

    const user = jwt.verify(token, process.env.JWT_SECRET);

    if (!user) return res.status(400).json({
        message: "code not found"
    })

    req.user = user;

    next()


};

export default authMiddleware