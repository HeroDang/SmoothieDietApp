import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ShoppingList } from '../../shoppinglist.module';
import { SmoothieGuideService } from '../../smoothie-guide.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.page.html',
  styleUrls: ['./shopping-list.page.scss'],
})
export class ShoppingListPage implements OnInit {
  shoppingList: ShoppingList

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
      if(paramMap.get('bookId') === 'b3'){
        this.shoppingList = this.smoothieGuideService.shoppingListDetox;
      }
      else{
        this.shoppingList = this.smoothieGuideService.shoppingListSmoothie[0];
      }
    })
  };
}


