import { BookService } from '../service/book';
import { CreateBookDto } from '../interface/book/dto/create-book.dto';
import { Container, Inject, Service } from 'typedi';
import { Request, Response } from 'express'; 
import { request } from 'http';

@Service()
export class BookController {
    constructor(@Inject() private readonly bookService: BookService) { }

    /* TypeError: Cannot read properties of undefined (reading 'bookService') 
     * 객체 내부의 존재하지 않는 프로퍼티에 접근하였기 때문에 undefined.
     * why? -> this를 호출하는 주체가 app.ts에 존재하는 bookController인데, 해당 this는 전역을 바라보고 있기 때문.
     * this: 호출하는 주체의 정보 
     *       default: 전역 객체 
     */
    // public async create(createData: CreateBookDto) {
    //     console.log(this);
    //     return this.bookService.create(createData);
    // };

    public create = async (req: Request, res: Response) => {
        const createData: CreateBookDto = req.body;
        return await this.bookService.create(createData);
    };

    public async getAll(orderBy: string) {}
    public async update(id: number) {}
    public async delete(id: number) {}
}