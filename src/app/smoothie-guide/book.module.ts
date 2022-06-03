import { DayDetail } from "./daydetail.module";
import { ShoppingList } from "./shoppinglist.module";

export class Book {
  constructor(
    public id: string,
    public title: string,
    // public shoppingList: ShoppingList,
    // public day: DayDetail[],
  ){}
}
