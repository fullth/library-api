import { BookService } from '../service/book';
import { Inject, Service } from 'typedi';
import { Request, Response } from 'express';
import { BookDto } from '../interface/book/dto/book.dto';

@Service()
export class BookController {
  constructor(@Inject() private readonly bookService: BookService) { }

  /** 신규 책 등록 */
  public create = async (req: Request, res: Response) => {
    const bookName: BookDto = req.body;
    const result = await this.bookService.create(bookName);
    res.send(result);
  };

  /** 책 정보 조회 */
  public getAll = async (req: Request, res: Response) => {
    const orderBy: string = req.query.orderBy as string;
    //const orderBy: string = JSON.stringify(req.query.orderBy).replace(/\"/g,'');
    const result = await this.bookService.getAll(orderBy);
    res.send(result);
  };

  /** 책 정보 수정 */
  public update = async (req: Request, res: Response) => {
    const id: number = Number.parseInt(req.body.id);
    const name: string = req.body.name;

    const result = await this.bookService.update(id, name);
    res.send(result);
  };

  /** 책 정보 삭제(생성자만 삭제할 수 있음.) */
  public delete = async (req: Request, res: Response) => {
    const id: string = req.body.id;
    const name: string = req.body.name;

    const result = await this.bookService.delete(id, name);
    res.send(result);
  };
}