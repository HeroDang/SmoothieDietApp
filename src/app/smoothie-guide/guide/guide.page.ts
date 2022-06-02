import { Component, OnInit } from '@angular/core';
import { SmoothieGuideService } from '../smoothie-guide.service';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.page.html',
  styleUrls: ['./guide.page.scss'],
})
export class GuidePage implements OnInit {
  titles:string[] = ['hung', 'nhien','dang'];
  titles1:string[] = ['hung', 'nhien','dang', 'nhien','dang', 'nhien','dang', 'nhien','dang', 'nhien','dang'];
  bookName: string = '3 Day Detox';
  show3Day = false;
  show21Day = false;

  constructor(private smoothieGuideService: SmoothieGuideService) { }

  ngOnInit() {
  }

  onShow3Day(){
    this.show3Day = true;
  }

}
