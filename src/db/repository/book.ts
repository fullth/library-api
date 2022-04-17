import { Container, Service } from "typedi";
import { CreateBookDto } from "../../interface/book/dto/create-book.dto";
import { connection as db } from '../mysql-connect.db';

@Service({id: 'book.repository'})
export class BookRepository {
    
    public async create(createData: CreateBookDto) {
        console.log("BookRepository called");

        db.query("INSERT INTO `BOOKS` (`TITLE`) VALUES (?)", createData, function(error, result) {
            if(error) {
                throw error;
            } else {
                console.log(result);
            }
        });
    };

    public async getAll(orderBy: string) {}
    public async update(id: number) {}
    public async delete(id: number) {}
}