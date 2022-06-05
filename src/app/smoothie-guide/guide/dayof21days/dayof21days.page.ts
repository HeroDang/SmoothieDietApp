import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DayDetail } from '../../daydetail.module';
import { SmoothieGuideService } from '../../smoothie-guide.service';

@Component({
  selector: 'app-dayof21days',
  templateUrl: './dayof21days.page.html',
  styleUrls: ['./dayof21days.page.scss'],
})
export class Dayof21daysPage implements OnInit, OnDestroy {
  day: DayDetail;
  daySub: Subscription;
  isLoading = false;

  smoothie: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    introduce: string;
    ingredients: string[];
    directions: string[];
  }[];

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private smoothieGuideService: SmoothieGuideService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('bookId') || !paramMap.has('dayof21Id')) {
        this.navCtrl.navigateBack('/smoothie-guide/tabs/guide');
        return;
      }
      this.isLoading = true;
      this.daySub = this.smoothieGuideService.getDaySmoothie(paramMap.get('dayof21Id')).subscribe(day => {
        this.day = day;
        this.smoothie = this.day.smoothie;
        this.isLoading = false;
      });
    });
  }

  ngOnDestroy(): void {
    if(this.daySub){
      this.daySub.unsubscribe();
    }
  }

}
