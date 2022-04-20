import { Service } from "typedi";
import { BookDto } from "../../interface/book/dto/book.dto";
import { connection as db } from '../mysql-connect.db';
import  * as dotenv from 'dotenv';
dotenv.config();

@Service()
export class BookRepository {
    
    public async create(data: BookDto) {
        db.query("INSERT INTO BOOKS (TITLE) VALUES (?)", [data.name], function(error, result) {
            if(error) {
                throw error;
            } else {
                console.log(result);
                return result;
            }
        });
    };

    public async getAll(orderBy: string) {
        db.promise().query("SELECT * FROM BOOKS ORDER BY ?", [orderBy])
            .then((result) => {
                console.log(result[0]);
                return result[0];
            })
            .catch(console.log)
    }

    public async update(id: number) {
        db.query("UPDATE BOOKS SET title= ? WHERE id = ?", [id], function(error, results) {
            if(error) {
                throw error;
            } else {
                console.log(results);
            }
        });
    }

    public async delete(id: number) {
        db.query("DELETE FROM BOOKS WHERE ID = ?", [id], function(error, results) {
            if(error) {
                throw error;
            } else {
                console.log(results);
            }
        });
    }
}