import { BookDto } from '../interface/book/dto/book.dto';
import { BookRepository } from '../db/repository/book';
import { Inject, Service } from 'typedi';

@Service()
export class BookService {
  constructor(@Inject() private readonly bookRepository: BookRepository) { }

  public async create(data: BookDto) {
    const result = await this.bookRepository.create(data);
    return result;
  };

  public async getAll(orderBy: string) {
    const result = await this.bookRepository.getAll(orderBy);
    return result;
  }

  public async update(id: number, name: string) {
    const result = await this.bookRepository.update(id, name);
    return result;
  };

  public async delete(id: string, name: string) {
    const result = await this.bookRepository.delete(id, name)
    return result;
  };
}