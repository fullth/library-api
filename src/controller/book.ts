import { BookService } from '../service/book';
import { CreateBookDto } from '../interface/book/dto/create-book.dto';
import { Container, Inject, Service } from 'typedi';

@Service()
export class BookController {
    constructor(@Inject() readonly booksService: BookService) {}

    public async create(createData: CreateBookDto) {
        return this.booksService.create(createData);
    };

    public async read() {
    };

    public async update() {
    };
    
    public async delete() {
    };
}