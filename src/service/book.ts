import { BookDto } from '../interface/book/dto/book.dto';
import { BookRepository } from '../db/repository/book';
import { Inject, Service } from 'typedi';

@Service()
export class BookService {
    constructor (@Inject() private readonly bookRepository: BookRepository) {}

    public async create(data: BookDto) {
        return this.bookRepository.create(data);
    };

    public async getAll(orderBy: string) {
        await this.bookRepository.getAll(orderBy)
            .then((result) => {
                console.log(result);
                return result;
            })
            .catch(console.log);
    };

    public async update(id: number, name: string) {
        await this.bookRepository.update(id)
            .then((result) => {
                console.log(result);
                return result;
            })
            .catch(console.log);
    };

    public async delete(id: number, name: string) {
        await this.bookRepository.delete(id)
            .then((result) => {
                console.log(result);
                return result;
            })
            .catch(console.log);
    };
}