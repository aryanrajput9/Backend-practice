const asyncHandler = require("../utils/asynhandler");
const registeservices = require("../services/auth.services");
const apiresponse = require("../utils/apiresponse");


const regsiterController = asyncHandler(async (req, res) => {

    const result = await registeservices(req.body);


    return res.status(201).json(
        new apiresponse("user create ho gya", result)
    )

});


module.exports = regsiterController