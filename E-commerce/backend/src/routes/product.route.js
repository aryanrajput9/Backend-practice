import { Router } from 'express'
import { createProductController, deleteProdcutCOntroller, getProductByCraeterController, getProductController, updateProductController } from '../controller/product.controller.js';


const productRouter = Router();


productRouter.post("/createproduct", createProductController);

productRouter.get("/getallproduct", getProductController);

productRouter.patch("/updateproduct/:productId", updateProductController);

productRouter.delete("/deleteproduct/:productId", deleteProdcutCOntroller);

productRouter.get("/getproductbyadmin", getProductByCraeterController)

export default productRouter