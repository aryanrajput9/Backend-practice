import { Router } from 'express'
import { createProductController, deleteProdcutCOntroller, getProductByCraeterController, getProductController, updateProductController } from '../controller/product.controller.js';
import productModel from '../model/product.model.js';


const productRouter = Router();


productRouter.post("/createproduct", createProductController);

productRouter.get("/getallproduct", getProductController);

productRouter.patch("/updateproduct/:productId", updateProductController);

productRouter.delete("/deleteproduct/:productId", deleteProdcutCOntroller);

productRouter.get("/getproductbyadmin", getProductByCraeterController);

productRouter.get("/getproduct/:id", async (req, res) => {
    const { id } = req.params;

    const product = await productModel.findById(id);

    return res.status(200).json({
        product
    })
})

export default productRouter