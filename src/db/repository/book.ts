import { Container, Service } from "typedi";
import { CreateBookDto } from "../../interface/book/dto/create-book.dto";
import { connection as db } from '../mysql-connect.db';

@Service()
export class BookRepository {
    
    public async create(createData: CreateBookDto) {
        // db.query("INSERT INTO `BOOKS` (`TITLE`) VALUES (?)", createData.name, function(error, result) {
        //     if(error) {
        //         throw error;
        //     } else {
        //         console.log(result);
        //     }
        // });
        // return createData;
        return 'hello';
    };

    public async getAll(orderBy: string) {}
    public async update(id: number) {}
    public async delete(id: number) {}
}