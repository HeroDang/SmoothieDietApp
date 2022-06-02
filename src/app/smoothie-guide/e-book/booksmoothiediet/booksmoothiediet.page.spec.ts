import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BooksmoothiedietPage } from './booksmoothiediet.page';

describe('BooksmoothiedietPage', () => {
  let component: BooksmoothiedietPage;
  let fixture: ComponentFixture<BooksmoothiedietPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksmoothiedietPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BooksmoothiedietPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
