import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.page.html',
  styleUrls: ['./guide.page.scss'],
})
export class GuidePage implements OnInit {
  subtitle:string = '21 Day Smoothie Diet';

  constructor() { }

  ngOnInit() {
  }

}
