import {CommonRoutesConfig} from '../../../common/common.routes.config';
import express from 'express';
import {Request, Response} from 'express';
import { booksService } from '../service/books.api.service';
import { booksVO } from '../vo/booksVO';

export class BooksRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'BooksRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/books/info`)
        .post((req: Request, res: Response) => {
            const book: booksVO = new booksVO();
            book.title = req.body.title;
            book.author = req.body.author;
            /**
             * @Question 
                * 매번 인스턴스화를 해줘야 하는지 여부
             * @Answer
                * TS에서는 typed di등의 라이브러리를 이용해서 의존성 주입을 할 수 있음.
             */
            const insertId: number = booksService.prototype.insertBookInfo(book);
            res.status(200).send(`${insertId}번째 책이 등록되었습니다.`);
        });

        this.app.route(`/books/info/list/:ordOpt`)
        .get((req: Request, res: Response) => {
            const orderOption: string = req.params.ordOpt;
            console.log("정렬옵션: " + orderOption);

            const bookList: booksVO = booksService.prototype.selectBookInfo(orderOption);
            res.status(200).send(bookList);
        });

        this.app.route(`/books/info/:bookId`)
        .patch((req: Request, res:Response) => {
            const updatedId: number = Number.parseInt(req.params.bookId); //update 할 책의 ID
            const updatedTitle: string = req.body.title; //update할 title명

            booksService.prototype.updateBookInfo(updatedId, updatedTitle);

            //실패해도 성공했다고 반환되는 잘못된 로직.
            res.status(200).send(`${updatedId}번의 책의 제목이 ${updatedTitle}로 변경되었습니다.`); 
        })
        .delete((req: Request, res: Response) => {
            const deletedId: number = Number.parseInt(req.params.bookId);

            booksService.prototype.deleteBookInfo(deletedId);
            res.status(200).send(`${deletedId}번의 책 정보가 삭제되었습니다.`);
        });

        return this.app;
    }
}