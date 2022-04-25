import { Service } from "typedi";
import { BookDto } from "../../interface/book/dto/book.dto";
import { connection as db } from '../mysql-connect.db';
import * as dotenv from 'dotenv';
dotenv.config();

@Service()
export class BookRepository {

  public async create(data: BookDto) {
    try {
      const result = await db.promise().query("INSERT INTO BOOKS (TITLE) VALUES (?)", [data.name]);
      return result[0];
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  public async getAll(orderBy: string) {
    let query = "SELECT * FROM BOOKS ORDER BY ID ASC";

    if (orderBy == 'desc' || orderBy == "DESC")
      query = "SELECT * FROM BOOKS ORDER BY ID DESC";

    try {
      const result = await db.promise().query(query);
      return result[0];
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  public async update(id: number, name: string) {
    try {
      const result = await db.promise().query("UPDATE BOOKS SET title= ? WHERE id = ?", [name, id]);
      return result[0];
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  public async delete(id: string, name: string) {
    try {
      const result = await db.promise().query("DELETE FROM BOOKS WHERE ID = ?", [id]);
      return result[0];
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}