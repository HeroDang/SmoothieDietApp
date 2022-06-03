import { Component, OnInit } from '@angular/core';
import { SmoothieGuideService } from '../smoothie-guide.service';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.page.html',
  styleUrls: ['./guide.page.scss'],
})
export class GuidePage implements OnInit {
  titles:string[] = this.smoothieGuideService.bookDetox.component;
  titles1:string[] = this.smoothieGuideService.bookSmoothie.component;
  bookName: string = this.smoothieGuideService.bookDetox.title;
  bookName2: string = this.smoothieGuideService.bookSmoothie.title;
  show3Day = false;
  show21Day = false;


  constructor(private smoothieGuideService: SmoothieGuideService) { }


  ngOnInit() {
  }


  onShow3Day(){
    this.show3Day = !this.show3Day;
  }

  onShow21Day(){
    this.show21Day = !this.show21Day;
  }

}
