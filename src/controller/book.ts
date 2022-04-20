import { BookService } from '../service/book';
import { Inject, Service } from 'typedi';
import { Request, Response } from 'express';
import { BookDto } from '../interface/book/dto/book.dto';

@Service()
export class BookController {
    constructor(@Inject() private readonly bookService: BookService) { }

    /* @Issue TypeError: Cannot read properties of undefined (reading 'bookService') 
     * 객체 내부의 존재하지 않는 프로퍼티에 접근하였기 때문에 undefined.
     * why? -> this를 호출하는 주체가 app.ts에 존재하는 bookController인데, 해당 this는 전역을 바라보고 있기 때문.
     * this: 호출하는 주체의 정보 
     *       default: 전역 객체 
     */
    // public async create(req: Request) {
    //     console.log(req.body)
    // };

    /** 신규 책 등록 */
    public create = async (req: Request, res: Response) => {
        const bookName: BookDto = req.body;
        res.send(this.bookService.create(bookName));
    };

    /** 책 정보 조회 */
    public getAll = async (req: Request, res: Response) => {
        const orderBy: string = req.params.orderby;

        res.send(this.bookService.getAll(orderBy))
    };

    /** 책 정보 수정 */
    public async update(req: Request, res: Response) {
        const id: number = Number.parseInt(req.params.id);
        const name: string = req.params.name;

        res.send(this.bookService.update(id, name));
    }

    /** 책 정보 삭제 */
    public async delete(req: Request, res: Response) {
        const id: number = Number.parseInt(req.params.id);
        const name: string = req.params.name;

        res.send(this.bookService.delete(id, name));
    }
}