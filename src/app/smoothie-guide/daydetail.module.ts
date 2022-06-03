export class DayDetail {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public imageUrl: string,
    public bookId: string,
    public smoothie: {
      title: string,
      introduce: string,
      ingredients: string[],
      directions: string[],
    }[],
  ){}
}
