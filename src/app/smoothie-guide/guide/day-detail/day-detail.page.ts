import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DayDetail } from '../../daydetail.module';
import { SmoothieGuideService } from '../../smoothie-guide.service';

@Component({
  selector: 'app-day-detail',
  templateUrl: './day-detail.page.html',
  styleUrls: ['./day-detail.page.scss'],
})
export class DayDetailPage implements OnInit {
  dayDetail: DayDetail;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private smoothieGuideService: SmoothieGuideService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('bookId') ||!paramMap.has('dayId')) {
        this.navCtrl.navigateBack('/smoothie-guide/tabs/guide');
        return;
      }
      this.dayDetail = this.smoothieGuideService.getDayDetox(paramMap.get('dayId'))
    })
  }

}
