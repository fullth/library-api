import { CreateBookDto } from '../interface/book/dto/create-book.dto';
import { BookRepository } from '../db/repository/book';
import { Container, Inject, Service } from 'typedi';

@Service()
export class BookService {
    constructor (@Inject() private readonly bookRepository: BookRepository) {}

    public create(createData: CreateBookDto) {
        // const getBody = (req: Request) => {
        //     console.log(req.body)
        // }
        return this.bookRepository.create(createData);
    };

    public async getAll(orderBy: string) {
        return this.bookRepository.getAll(orderBy);
    };

    public async update(id: number) {
        return this.bookRepository.update(id);
    };

    public async delete(id: number) {
        return this.bookRepository.delete(id);
    };
}