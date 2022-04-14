import { Router } from "express";
import { BookController } from '../controller/book';
import { Container } from "typedi";

const router = Router();
const bookController = Container.get(BookController);

router.route('/book?{orderBy}')
    .get(bookController.read)

router.route('/book/:id')
    .post(bookController.create)
    .patch(bookController.update)
    .delete(bookController.delete)

export default router;