import { Injectable } from '@angular/core';
import { ShoppingList } from './shoppinglist.module';

@Injectable({
  providedIn: 'root'
})
export class SmoothieGuideService {
  private shoppinglist21day: ShoppingList[] = [
    new ShoppingList(
      'w1',
      'week 1',
      '21day',
      [
        {
          title: 'ru',
          component: ['df','dfsf']
        },
        {
          title: 'ru',
          component: ['df','dfsf']
        }
      ]
    ),
    new ShoppingList(
      'w2',
      'week 1',
      '21day',
      [
        {
          title: 'ru',
          component: ['df','dfsf']
        },
        {
          title: 'ru',
          component: ['df','dfsf']
        }
      ]
    ),
    new ShoppingList(
      'w3',
      'week 1',
      '21day',
      [
        {
          title: 'ru',
          component: ['df','dfsf']
        },
        {
          title: 'ru',
          component: ['df','dfsf']
        }
      ]
    ),
  ];

  constructor() { }
}
