import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DayDetail } from '../../daydetail.module';
import { SmoothieGuideService } from '../../smoothie-guide.service';

@Component({
  selector: 'app-day-detail',
  templateUrl: './day-detail.page.html',
  styleUrls: ['./day-detail.page.scss'],
})
export class DayDetailPage implements OnInit, OnDestroy {
  dayDetail: DayDetail;
  dayDetailSub: Subscription;
  smoothie: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    introduce: string;
    ingredients: string[];
    directions: string[];
  };
  isLoading = false;

showCheckbox = false;
  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private smoothieGuideService: SmoothieGuideService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('bookId') ||!paramMap.has('dayId') ||!paramMap.has('smoothieId')) {
        this.navCtrl.navigateBack('/smoothie-guide/tabs/guide');
        return;
      }

      this.isLoading = true;
      if(paramMap.get('bookId') === 'b3'){
        this.dayDetailSub = this.smoothieGuideService.getDayDetox(paramMap.get('dayId'))
        .subscribe(dayDetox => {
          this.dayDetail = dayDetox;
          for(let smo of this.dayDetail.smoothie){
            if(smo.id === paramMap.get('smoothieId')){
              this.smoothie = smo;
            }
          }
          this.isLoading = false;
        });
      }else{
        this.dayDetailSub = this.smoothieGuideService.getDaySmoothie(paramMap.get('dayId'))
        .subscribe(daySmoothie => {
          this.dayDetail = daySmoothie;
          for(let smo of this.dayDetail.smoothie){
            if(smo.id === paramMap.get('smoothieId')){
              this.smoothie = smo;
            }
          }
          this.isLoading = false;
        });
      }

    });
  }
  onShowCheckbox(){
    this.showCheckbox = !this.showCheckbox;
  }

  ngOnDestroy(): void {
    if(this.dayDetailSub){
      this.dayDetailSub.unsubscribe();
    }
  }
}
