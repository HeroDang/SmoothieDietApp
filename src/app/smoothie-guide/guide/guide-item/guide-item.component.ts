import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-guide-item',
  templateUrl: './guide-item.component.html',
  styleUrls: ['./guide-item.component.scss'],
})
export class GuideItemComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {}

}
