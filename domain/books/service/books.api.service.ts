import { connection as db} from "../../../database/mysql.database.connection";
import { booksVO } from "../vo/booksVO";
import { IBooksService } from './books.api.iservice';

export class booksService implements IBooksService {
    //책 정보를 삽입한다.
    insertBookInfo(book: booksVO):number | any {
        db.query("INSERT INTO `BOOKS` (`TITLE`, `AUTHOR`) VALUES (?, ?)", [book.title, book.author], function(error, result) {
            if(error) {
                throw error;
            } else {
                console.log(result);
                return 1;
            }
        });
    }
    
    //책 리스트를 조회한다.
    /**
     * @Question
        * ordOpt를 string으로 받아와서 쿼리오류가 발생.
     */
    selectBookInfo(ordOpt: string): booksVO {
        const bookList = new booksVO();
        db.query("SELECT * FROM `BOOKS` ORDER BY `ID` ?", ordOpt, function(error, result) {
            if(error) {
                throw error;
            } else {
                console.dir(result);
            }
        });
        return bookList;
    }

    //책 제목을 수정한다.
    updateBookInfo(id: number, title: string): void {
        db.query("UPDATE `BOOKS` SET `TITLE` = (?) WHERE ID = ?", [title, id], function(error, result) {
            if(error) {
                throw error;
            } else {
                console.dir(result);
            }
        });
    }

    //책 정보를 삭제한다.
    deleteBookInfo(id: number): void {
        db.query("DELETE FROM BOOKS WHERE ID = ?", id,function(error, result) {
            if(error) {
                throw error;
            } else {
                console.dir(result);
            }
        });
    }

}