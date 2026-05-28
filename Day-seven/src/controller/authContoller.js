const getContoller = (req, res) => {
    let { name, email } = req.body;

    const user = {
        name, email
    }
    return res.status(201).json({
        message: "create",
        users: user
    })
}


module.exports = getContoller