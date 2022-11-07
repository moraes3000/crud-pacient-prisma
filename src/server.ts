import express, { Request, Response, NextFunction } from 'express'

import cors from 'cors'
import path from 'path'
import { router } from './routes';



const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

// pegar pasta local
import uploadConfig from './config/upload'
import multer from 'multer';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { CreateProductController } from './modules/product/controller/CreateProductController';

const upload = multer(uploadConfig.upload('./tmp'))

app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'tmp'))
)

router.post('/product', isAuthenticated, upload.single('avatar'), new CreateProductController().handle);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message
    })
  }
  res.status(500).json({
    status: "error",
    message: "Interno  server error"
  })
})

app.listen(3333, () => console.log('🚀🚀🚀 SERVIDOR ONLINE 🚀🚀🚀'));