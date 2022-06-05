export class User {
  constructor(
    public id: string,
    public fullname: string,
    public email: string,
    public bookId: string,
    public phone: number,
    public gender: string,
    public password: string,
  ){}
}
