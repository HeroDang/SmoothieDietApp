import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookquickstart',
  templateUrl: './bookquickstart.page.html',
  styleUrls: ['./bookquickstart.page.scss'],
})
export class BookquickstartPage implements OnInit {
  public nguon = ['../../../../assets/Image/QS.PNG',
        '../../../../assets/Image/QS1.PNG',
        '../../../../assets/Image/QS2.PNG',
        '../../../../assets/Image/QS3.PNG',
        '../../../../assets/Image/QS4.PNG',
        '../../../../assets/Image/QS5.PNG',
        '../../../../assets/Image/QS6.PNG',
        '../../../../assets/Image/QS7.PNG',
        '../../../../assets/Image/QS8.PNG',
        '../../../../assets/Image/QS9.PNG',
        '../../../../assets/Image/QS10.PNG'];
  constructor() { }

  ngOnInit() {
  }

}
