export class DayDetail {
  constructor(
    public id: string,
    public title: string,
    public bookId: string,
    public smoothie: {
      id: string;
      title: string;
      description: string;
      imageUrl: string;
      introduce: string;
      ingredients: string[];
      directions: string[];
    }[],
  ){}
}
