import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from '../book.module';
import { DayDetail } from '../daydetail.module';
import { ShoppingList } from '../shoppinglist.module';
import { SmoothieGuideService } from '../smoothie-guide.service';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.page.html',
  styleUrls: ['./guide.page.scss'],
})
export class GuidePage implements OnInit, OnDestroy{
  // titles:string[] = this.smoothieGuideService.bookDetox.component;
  // titles1:string[] = this.smoothieGuideService.bookSmoothie.component;
  // bookName2: string = this.smoothieGuideService.bookSmoothie.title;
  // bookDetox: Book = this.smoothieGuideService.bookDetox;

  shoppingListDetox: ShoppingList;
  dayDetoxs: DayDetail[]
  shoppingListSmoothie: ShoppingList[];
  daySmoothie: DayDetail[];

  shoppingListDetoxSub: Subscription;
  shoppingListSmoothieSub: Subscription;
  dayDetoxsSub: Subscription;
  daySmoothieSub: Subscription;

  isLoading = false;
  isLoadingSmoothie = false;
  show3Day = false;
  show21Day = false;

  constructor(private smoothieGuideService: SmoothieGuideService) { }

  ngOnInit() {
    this.shoppingListDetoxSub = this.smoothieGuideService.shoppingListDetox.subscribe(shpLDetox => {
      this.shoppingListDetox = shpLDetox;
    })
    this.shoppingListSmoothieSub = this.smoothieGuideService.shoppingListSmoothie.subscribe(shpLSmoothie => {
      this.shoppingListSmoothie = shpLSmoothie;
    })
    this.dayDetoxsSub = this.smoothieGuideService.dayDetox.subscribe(dayDetoxs => {
      this.dayDetoxs = dayDetoxs;
    })
    this.daySmoothieSub = this.smoothieGuideService.dayDiet.subscribe(daySmoothie => {
      this.daySmoothie = daySmoothie;
    })
  }

  ionViewWillEnter(){
    this.isLoading = true;
    this.isLoadingSmoothie = true;
    this.smoothieGuideService.fetchShoppingListDetox().subscribe(() => {
      this.smoothieGuideService.fetchDayDetox().subscribe(()=>{
        this.isLoading = false;
      })
    })
    this.smoothieGuideService.fetchShoppingListSmoothie().subscribe(()=>{
      this.smoothieGuideService.fetchDaySmoothie().subscribe(() => {
        this.isLoadingSmoothie = false;
      })
    })
  }

  onShow3Day(){
    this.show3Day = !this.show3Day;
  }

  onShow21Day(){
    this.show21Day = !this.show21Day;
  }

  ngOnDestroy(): void {
    if(this.shoppingListDetoxSub){
      this.shoppingListDetoxSub.unsubscribe();
    }
    if(this.shoppingListSmoothieSub){
      this.shoppingListSmoothieSub.unsubscribe();
    }
    if(this.dayDetoxsSub){
      this.dayDetoxsSub.unsubscribe();
    }
    if(this.daySmoothieSub){
      this.daySmoothieSub.unsubscribe();
    }
  }
}
