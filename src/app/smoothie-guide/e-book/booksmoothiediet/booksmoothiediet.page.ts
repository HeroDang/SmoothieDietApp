import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booksmoothiediet',
  templateUrl: './booksmoothiediet.page.html',
  styleUrls: ['./booksmoothiediet.page.scss'],
})
export class BooksmoothiedietPage implements OnInit {
  public nguon = ['../.././../../assets/Image/S.PNG',
      '../.././../../assets/Image/S1.PNG',
      '../.././../../assets/Image/S2.PNG',
      '../.././../../assets/Image/S3.PNG',
      '../.././../../assets/Image/S4.PNG',
      '../.././../../assets/Image/S5.PNG',
      '../.././../../assets/Image/S6.PNG',
      '../.././../../assets/Image/S7.PNG',
      '../.././../../assets/Image/S8.PNG',
      '../.././../../assets/Image/S9.PNG',];
  constructor() { }

  ngOnInit() {
  }

}
