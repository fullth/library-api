import { booksVO } from '../vo/booksVO';
export interface IBooksService {
    insertBookInfo(booksVO: booksVO): number;
    selectBookInfo(ordOpt: string): booksVO;
    updateBookInfo(id: number, title: string): void;
    deleteBookInfo(id: number): void;
}