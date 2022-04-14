import { CreateBookDto } from '../interface/book/dto/create-book.dto';
import { BookRepository } from '../db/repository/book';
import { Container, Inject, Service } from 'typedi';

@Service()
export class BookService {
    constructor (@Inject() private readonly bookRepository: BookRepository) {}

    public async create(createData: CreateBookDto) {
        this.bookRepository.create(createData);
    };

    public async read() {
    };

    public async update() {
    };

    public async delete() {
    };
}