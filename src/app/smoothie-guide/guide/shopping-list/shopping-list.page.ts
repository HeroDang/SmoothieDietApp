import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ShoppingList } from '../../shoppinglist.module';
import { SmoothieGuideService } from '../../smoothie-guide.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.page.html',
  styleUrls: ['./shopping-list.page.scss'],
})
export class ShoppingListPage implements OnInit, OnDestroy {
  shoppingList: ShoppingList;
  shopingListSub : Subscription;
  showCheckbox = false;
  isLoading = false;


  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private smoothieGuideService: SmoothieGuideService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('bookId') || !paramMap.has('listId')) {
        this.navCtrl.navigateBack('/smoothie-guide/tabs/guide');
        return;
      }
      this.isLoading = true;
      if(paramMap.get('bookId') === 'b3'){
        this.shopingListSub = this.smoothieGuideService.getShoppingListDetox(paramMap.get('listId'))
        .subscribe(shoppingListDetox => {
          this.shoppingList = shoppingListDetox;
          this.isLoading = false;
        });
      }
      else{
        this.shopingListSub = this.smoothieGuideService.getShoppingListSmoothie(paramMap.get('listId'))
        .subscribe(shoppingListSmoothie => {
          this.shoppingList = shoppingListSmoothie;
          this.isLoading = false;
        });
      }
    });
  };
  onShowCheckbox(){
    this.showCheckbox = !this.showCheckbox;
  }

  ngOnDestroy(): void {
    if(this.shopingListSub){
      this.shopingListSub.unsubscribe();
    }
  }
}


