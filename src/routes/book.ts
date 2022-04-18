import { Router } from "express";
import { BookController } from '../controller/book';
import { Container } from "typedi";

const router = Router();
const bookController = Container.get(BookController); 

router.route('/')
    .post(bookController.create);

router.route('/?{orderBy}')
    .get(bookController.getAll);

router.route('/:id')
    .patch(bookController.update)
    .delete(bookController.delete);

export default router; // 데코레이터