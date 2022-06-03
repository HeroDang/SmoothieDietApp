import { Injectable } from '@angular/core';
import { Book } from './book.module';
import { DayDetail } from './daydetail.module';
import { ShoppingList } from './shoppinglist.module';

@Injectable({
  providedIn: 'root'
})
export class SmoothieGuideService {
  private _bookDetox = new Book(
    'b3',
    '3 Day Detox',
    [
      'Detox Shopping List',
      'Day 1: Green Apple Parsley',
      'Day 2: Pineapple Mint',
      'Day 3: Ginger Raspberry',
    ]
  )

  private _bookSmoothie = new Book(
    'b21',
    'The Smoothie Diet',
    [
      'Week 1 Shopping List',
      'Day 1',
      'Day 2',
      'Day 3',
      'Day 4',
      'Day 5',
      'Day 6',
    ]
  )

  private _shoppingListDetox = new ShoppingList(
    '3day',
    'Detox Shopping List',
    this._bookDetox.id,
    [
      {
        title: 'Greens',
        component: ['Spinach (3 cups/3oz/90g)',
        'Kale (3 cups/3oz/90g)',
        'Romaine Lettuce (3 cups/3oz/90g)',
        'Parsley (2 bunches)',
        'Mint (2 bunches)']
      },
      {
        title: 'Fruits',
        component: ['Pear (2)',
        'Green Apple (3)',
        'Banana (2)',
        'Oranges (3)',
        'Fresh Ginger (3 inch piece)']
      }
    ]
  )

  private _shoppingListSmoothie = new ShoppingList(
    '21day',
    'Week 1 Shopping List',
    this._bookSmoothie.id,
    [
      {
        title: 'Veggies',
        component: ['Spinach (4 cups/4oz/120g)',
        'Kale (4 cups/4oz/120g)',
        'Romaine (4 cups/4oz/120g)',
        'Avocado (1)']
      },
      {
        title: 'Fruits',
        component: ['Medium Bananas (7)',
        'Dates (7)',
        'Orange (1)',
        'Mango (2)',
        'Medium Green Apple (1)',
        'Medium Pear (1)',
        'Cantaloupe (1 cup/5oz)',
        'Lime (1)',
        ]
      }
    ]
  )

  private _dayDetox: DayDetail[] = [
    new DayDetail(
      'd1',
      'Day 1: Green Apple Parsley',
      'Parsley is naturally detoxifying herb that has plenty of nutrients, and a zippy flavor. You wouldn’t think it would be good in a smoothie, but paired with the right ingredients, it’s delicious. Serves 1',
      'If following option 1, you can blend multiple servings at once. I prefer to blend the smoothies separately instead of all at once. The above recipe is for one serving, If you want to blend 2-3 smoothies at one time, simply multiply the ingredients. To make ahead, make two in the morning, one to drink and one to take with you and then make the last one fresh at night.',
      'url image',
      this.bookDetox.id,
      [
        '1 cup/8oz filtered water',
        '1 handful (1cup/1oz/30g) spinach',
        '2 tbsp ground flax seed',
        '1 tbsp ground chia seeds',
        '1 green apple',
        '1/2 ripened pear',
        '1/4 cup parsley',
        '1/2 cup ice',
      ],
      [
        'Put all of the ingredients in a blender and blend until smooth and creamy'
      ]
    )
  ];

  constructor() {
  }

  get bookDetox(){
    return this._bookDetox;
  }

  get bookSmoothie(){
    return this._bookSmoothie;
  }

  get shoppingListDetox(){
    return this._shoppingListDetox;
  }

  get shoppingListSmoothie(){
    return this._shoppingListSmoothie;
  }

  get dayDetox(){
    return this._dayDetox;
  }


}
