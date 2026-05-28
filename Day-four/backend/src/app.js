const express = require('express');
const productModel = require('./model/product.model');
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())

app.post("/lol", async (req, res) => {
    try {

        let { productName, price, category, description } = req.body;

        const productDetails = await productModel.create({
            productName,
            price: {
                amount: price.amount,
                currency: price.currency,
            },
            category,
            description
        })

        return res.status(201).json({
            message: "create ho gya",
            product: productDetails
        })

    } catch (error) {
        console.log("error in post api", error)
    }

})
app.get('/getProductData', async (req, res) => {

    const product = await productModel.find();
    res.status(200).json({
        message: "data aa gya",
        product
    })
})


module.exports = app