import { Router } from 'express';
import { createCatgoryController } from '../controller/category.controller.js';


const categoryRouter = Router();


categoryRouter.post("/createcategory", createCatgoryController);


export default categoryRouter