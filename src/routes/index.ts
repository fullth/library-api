import { Router } from "express";
import BookRouter from "./book";

const router = Router();

router.use('/book', BookRouter);

export default router;