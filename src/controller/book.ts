import { BookService } from '../service/book';
import { CreateBookDto } from '../interface/book/dto/create-book.dto';
import { Container, Inject, Service } from 'typedi';

@Service({id: 'book.controller'})
export class BookController {
    private readonly bookService: BookService;
    
    constructor(@Inject('book.service') bookService: BookService) {
        this.bookService = bookService;
        console.dir(bookService);
    }

    /** TypeError: Cannot read properties of undefined (reading 'bookService') */
    public async create(createData: CreateBookDto) {
        return this.bookService.create(createData);
    };

    public async getAll(orderBy: string) {}
    public async update(id: number) {}
    public async delete(id: number) {}
}