import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookdetox',
  templateUrl: './bookdetox.page.html',
  styleUrls: ['./bookdetox.page.scss'],
})
export class BookdetoxPage implements OnInit {
 public nguon = ['../.././../../assets/Image/Capture.PNG',
      '../.././../../assets/Image/Capture1.PNG',
      '../.././../../assets/Image/Capture2.PNG',
      '../.././../../assets/Image/Capture3.PNG',
      '../.././../../assets/Image/Capture4.PNG',
      '../.././../../assets/Image/Capture5.PNG',
      '../.././../../assets/Image/Capture6.PNG',
      '../.././../../assets/Image/Capture7.PNG',
      '../.././../../assets/Image/Capture8.PNG',
      '../.././../../assets/Image/Capture9.PNG',
      '../.././../../assets/Image/Capture10.PNG'];

  constructor() { }

  ngOnInit() {
  }

}
