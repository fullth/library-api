export class booksVO {
    private _title: string;
    private _author: string;
    private _created_at: Date;
    private _modified_at: Date;

    public get title() {
      return this._title
    }
    
    public set title(title: string) {
      this._title = title
    }
    
    public get author() {
      return this._author
    }
    
    public set author(author: string) {
      this._author = author
    }
    
    public get created_at() {
      return this._created_at
    }
    
    public get modified_at() {
      return this._modified_at
    }
}