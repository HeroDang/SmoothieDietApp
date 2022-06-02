export class DayDetail {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public imageUrl: string,
    public bookId: string,
    public ingredients: string[],
    public directions: string[],
    public introduce: string
  ){}
}
