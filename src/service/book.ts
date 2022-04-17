import { CreateBookDto } from '../interface/book/dto/create-book.dto';
import { BookRepository } from '../db/repository/book';
import { Container, Inject, Service } from 'typedi';

@Service({id: 'book.service'})
export class BookService {
    private readonly bookRepository: BookRepository;
    
    constructor (@Inject('book.repository') bookRepository: BookRepository) {
        this.bookRepository = bookRepository;
        console.dir(bookRepository);
    }

    public async create(createData: CreateBookDto) {
        this.bookRepository.create(createData);
    };

    public async getAll(orderBy: string) {
        this.bookRepository.getAll(orderBy);
    };

    public async update(id: number) {
        this.bookRepository.update(id);
    };

    public async delete(id: number) {
        this.bookRepository.delete(id);
    };
}