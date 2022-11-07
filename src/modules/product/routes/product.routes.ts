import { Router } from "express";
import multer from "multer";

import { isAuthenticated } from "../../../middlewares/isAuthenticated";
import { CreateProductController } from "../controller/CreateProductController";
import { ListProductController } from "../controller/ListProductController";

import uploadConfig from "../../../config/upload";
const upload = multer(uploadConfig.upload('./tmp'))

const productRoutes = Router();

const createController = new CreateProductController();
const listController = new ListProductController();

productRoutes.post('/', isAuthenticated, upload.single('avatar'), createController.handle);
productRoutes.get('/', isAuthenticated, listController.handle);




export default productRoutes;