export class ShoppingList {
  constructor(
    public id: string,
    public title: string,
    public bookId: string,
    public ingredients:
      {
        title:string,
        component: string[]
      }[]
  ){}
}
