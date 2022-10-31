import express, { Request, Response, NextFunction } from 'express'

import cors from 'cors'
import path from 'path'
import { router } from './routes';



const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

// pegar pasta local
app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'tmp'))
)

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