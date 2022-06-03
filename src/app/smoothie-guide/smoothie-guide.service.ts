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
    // this.shoppingListDetox,
    // this.dayDetox,
  )

  private _bookSmoothie = new Book(
    'b21',
    'The Smoothie Diet',
    // this.shoppingListSmoothie,
    // this.dayDetox,
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

  private _shoppingListSmoothie: ShoppingList[] = [
    new ShoppingList(
      'w1',
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
        },
        {
          title: 'Pantry',
          component: ['Rolled Oats (2 cups/200g)',
          'Unsweeted Almond Butter (2 tbsp)',
          'Natural Peanut Butter (1 tbsp)',
          'Pumpkin Puree (1-15oz can)',
          'Cayenne Pepper ( I small container)',
          'Cinnamon (1 small container)',
          'Unsweeteed Coconut (4 tbsp) (Flakes or Shredded)',
          'Coconut Oil (2 tsp)',
          'Ground Flax Seed (2 tbsp/16oz)',
          'Wheat Germ (2 tbsp/16oz)',
          'Vanilla Extract (1 small container)',
          'Honey or Stevia (as needed)',
          'Unsweetened Cocoa Powder (1 tbsp)',
          'Nutmeg',
          'Ground Cardamom',
          'Ground Ginger',
          ]
        }
      ]
    )
  ]

  private _dayDetox: DayDetail[] = [
    new DayDetail(
      'd1',
      'Day 1',
      // 'If following option 1, you can blend multiple servings at once. I prefer to blend the smoothies separately instead of all at once. The above recipe is for one serving, If you want to blend 2-3 smoothies at one time, simply multiply the ingredients. To make ahead, make two in the morning, one to drink and one to take with you and then make the last one fresh at night.',
      this.bookDetox.id,
      [
        {
          id: 'sm1',
          title: 'Green Apple Parsley',
          description: 'Parsley is naturally detoxifying herb that has plenty of nutrients, and a zippy flavor. You wouldn’t think it would be good in a smoothie, but paired with the right ingredients, it’s delicious. Serves 1',
          imageUrl: 'url image',
          introduce: 'If following option 1, you can blend multiple servings at once. I prefer to blend the smoothies separately instead of all at once. The above recipe is for one serving, If you want to blend 2-3 smoothies at one time, simply multiply the ingredients. To make ahead, make two in the morning, one to drink and one to take with you and then make the last one fresh at night.',
          ingredients:[
            '1 cup/8oz filtered water',
            '1 handful (1cup/1oz/30g) spinach',
            '2 tbsp ground flax seed',
            '1 tbsp ground chia seeds',
            '1 green apple',
            '1/2 ripened pear',
            '1/4 cup parsley',
            '1/2 cup ice',
          ],
          directions:[
            'Put all of the ingredients in a blender and blend until smooth and creamy'
          ],
        }
      ]
    ),

    new DayDetail(
      'd2',
      'Day 2',
      // 'If following option 1, you can blend multiple servings at once. I prefer to blend the smoothies separately instead of all at once. The above recipe is for one serving, If you want to blend 2-3 smoothies at one time, simply multiply the ingredients. To make ahead, make two in the morning, one to drink and one to take with you and then make the last one fresh at night.',
      this.bookDetox.id,
      [
        {
          id: 'sm1',
          title: 'Pineapple Mint',
          description: 'Parsley is naturally detoxifying herb that has plenty of nutrients, and a zippy flavor. You wouldn’t think it would be good in a smoothie, but paired with the right ingredients, it’s delicious. Serves 1',
          imageUrl: 'url image',
          introduce: 'If following option 1, you can blend multiple servings at once. I prefer to blend the smoothies separately instead of all at once. The above recipe is for one serving, If you want to blend 2-3 smoothies at one time, simply multiply the ingredients. To make ahead, make two in the morning, one to drink and one to take with you and then make the last one fresh at night.',
          ingredients:[
            '1 cup/8oz filtered water',
            '1 handful (1cup/1oz/30g) spinach',
            '2 tbsp ground flax seed',
            '1 tbsp ground chia seeds',
            '1 green apple',
            '1/2 ripened pear',
            '1/4 cup parsley',
            '1/2 cup ice',
          ],
          directions:[
            'Put all of the ingredients in a blender and blend until smooth and creamy'
          ],
        }
      ]
    ),

    new DayDetail(
      'd3',
      'Day 3',
      // 'If following option 1, you can blend multiple servings at once. I prefer to blend the smoothies separately instead of all at once. The above recipe is for one serving, If you want to blend 2-3 smoothies at one time, simply multiply the ingredients. To make ahead, make two in the morning, one to drink and one to take with you and then make the last one fresh at night.',
      this.bookDetox.id,
      [
        {
          id: 'sm1',
          title: 'Ginger Raspberry',
          description: 'Parsley is naturally detoxifying herb that has plenty of nutrients, and a zippy flavor. You wouldn’t think it would be good in a smoothie, but paired with the right ingredients, it’s delicious. Serves 1',
          imageUrl: 'url image',
          introduce: 'If following option 1, you can blend multiple servings at once. I prefer to blend the smoothies separately instead of all at once. The above recipe is for one serving, If you want to blend 2-3 smoothies at one time, simply multiply the ingredients. To make ahead, make two in the morning, one to drink and one to take with you and then make the last one fresh at night.',
          ingredients:[
            '1 cup/8oz filtered water',
            '1 handful (1cup/1oz/30g) spinach',
            '2 tbsp ground flax seed',
            '1 tbsp ground chia seeds',
            '1 green apple',
            '1/2 ripened pear',
            '1/4 cup parsley',
            '1/2 cup ice',
          ],
          directions:[
            'Put all of the ingredients in a blender and blend until smooth and creamy'
          ],
        }
      ]
    ),
  ];

  private _dayDiet: DayDetail[] = [
    new DayDetail(
      'd3',
      'Day 3',
      // 'If following option 1, you can blend multiple servings at once. I prefer to blend the smoothies separately instead of all at once. The above recipe is for one serving, If you want to blend 2-3 smoothies at one time, simply multiply the ingredients. To make ahead, make two in the morning, one to drink and one to take with you and then make the last one fresh at night.',
      this.bookDetox.id,
      [
        {
          id: 'sm1',
          title: 'Ginger Raspberry',
          description: 'Parsley is naturally detoxifying herb that has plenty of nutrients, and a zippy flavor. You wouldn’t think it would be good in a smoothie, but paired with the right ingredients, it’s delicious. Serves 1',
          imageUrl: 'url image',
          introduce: 'If following option 1, you can blend multiple servings at once. I prefer to blend the smoothies separately instead of all at once. The above recipe is for one serving, If you want to blend 2-3 smoothies at one time, simply multiply the ingredients. To make ahead, make two in the morning, one to drink and one to take with you and then make the last one fresh at night.',
          ingredients:[
            '1 cup/8oz filtered water',
            '1 handful (1cup/1oz/30g) spinach',
            '2 tbsp ground flax seed',
            '1 tbsp ground chia seeds',
            '1 green apple',
            '1/2 ripened pear',
            '1/4 cup parsley',
            '1/2 cup ice',
          ],
          directions:[
            'Put all of the ingredients in a blender and blend until smooth and creamy'
          ],
        }
      ]
    ),
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

  get dayDiet(){
    return this._dayDiet;
  }

  getDayDetox(id: string){
    // eslint-disable-next-line no-underscore-dangle
    return {...this._dayDetox.find(d => d.id === id)};
  }

}
