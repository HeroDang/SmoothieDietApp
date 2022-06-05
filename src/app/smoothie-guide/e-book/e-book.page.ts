import { Component, OnInit } from '@angular/core';
import { SmoothieGuideService } from '../smoothie-guide.service';

@Component({
  selector: 'app-e-book',
  templateUrl: './e-book.page.html',
  styleUrls: ['./e-book.page.scss'],
})
export class EBookPage implements OnInit {

  constructor(private smoothieService: SmoothieGuideService) { }

  ngOnInit() {
  }

  onAdd(){
    this.smoothieService.addShoppingListSmoothie().subscribe();
    console.log('add ShoppingListSmoothie')
  }
  onGet(){
    this.smoothieService.fetchShoppingListDetox().subscribe(() => {
      console.log('work!!')
    });
    console.log('get')
  }

  onAddDayDetox(){
    this.smoothieService.addDayDetox().subscribe(() => {
      console.log('add day detox')
    })
  }

  onAddDaySmoothie(){
    this.smoothieService.addDaySmoothie().subscribe(() =>{
      console.log('add day smoothie')
    })
  }
}
