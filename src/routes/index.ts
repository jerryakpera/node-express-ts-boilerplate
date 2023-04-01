import express, { Request, Response } from 'express';

const router = express.Router();

router.use('/', (req: Request, res: Response) => {
  return res.send('Routes');
});

export default router;
