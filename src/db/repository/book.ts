import { Service } from "typedi";
import { CreateBookDto } from "../../interface/book/dto/create-book.dto";

@Service()
export class BookRepository {
    constructor() {}
    
    public async create(createData: CreateBookDto) {
        //return bookRepository.create(createData);
    };
}