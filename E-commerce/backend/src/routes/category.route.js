import { Router } from 'express';
import { createCatgoryController, deleteContorller, editCategoryController, getCategoryController } from '../controller/category.controller.js';


const categoryRouter = Router();


categoryRouter.post("/createcategory", createCatgoryController);
categoryRouter.get("/getCatehory", getCategoryController);
categoryRouter.delete("/deletecategory/:id", deleteContorller);
categoryRouter.patch("/editCategory/:id", editCategoryController)



export default categoryRouter