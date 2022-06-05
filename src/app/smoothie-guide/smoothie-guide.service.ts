import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { delay, take, tap, switchMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Book } from './book.module';
import { DayDetail } from './daydetail.module';
import { ShoppingList } from './shoppinglist.module';

// new ShoppingList(
    //   '3day',
    //   'Detox Shopping List',
    //   // eslint-disable-next-line no-underscore-dangle
    //   this._bookDetox.id,
    //   [
    //     {
    //       title: 'Greens',
    //       component: ['Spinach (3 cups/3oz/90g)',
    //       'Kale (3 cups/3oz/90g)',
    //       'Romaine Lettuce (3 cups/3oz/90g)',
    //       'Parsley (2 bunches)',
    //       'Mint (2 bunches)']
    //     },
    //     {
    //       title: 'Fruits',
    //       component: ['Pear (2)',
    //       'Green Apple (3)',
    //       'Banana (2)',
    //       'Oranges (3)',
    //       'Fresh Ginger (3 inch piece)']
    //     }
    //   ]
    // )
  // );

  // new DayDetail(
  //   'd1',
  //   'Day 1',
  //   // 'If following option 1, you can blend multiple servings at once. I prefer to blend the smoothies separately instead of all at once. The above recipe is for one serving, If you want to blend 2-3 smoothies at one time, simply multiply the ingredients. To make ahead, make two in the morning, one to drink and one to take with you and then make the last one fresh at night.',
  //   this.bookDetox.id,
  //   [
  //     {
  //       id: 'sm1',
  //       title: 'Green Apple Parsley',
  //       description: 'Parsley is naturally detoxifying herb that has plenty of nutrients, and a zippy flavor. You wouldn’t think it would be good in a smoothie, but paired with the right ingredients, it’s delicious. Serves 1',
  //       imageUrl: 'url image',
  //       introduce: 'If following option 1, you can blend multiple servings at once. I prefer to blend the smoothies separately instead of all at once. The above recipe is for one serving, If you want to blend 2-3 smoothies at one time, simply multiply the ingredients. To make ahead, make two in the morning, one to drink and one to take with you and then make the last one fresh at night.',
  //       ingredients:[
  //         '1 cup/8oz filtered water',
  //         '1 handful (1cup/1oz/30g) spinach',
  //         '2 tbsp ground flax seed',
  //         '1 tbsp ground chia seeds',
  //         '1 green apple',
  //         '1/2 ripened pear',
  //         '1/4 cup parsley',
  //         '1/2 cup ice',
  //       ],
  //       directions:[
  //         'Put all of the ingredients in a blender and blend until smooth and creamy'
  //       ],
  //     }
  //   ]
  // ),

  // new DayDetail(
  //   'd2',
  //   'Day 2',
  //   // 'If following option 1, you can blend multiple servings at once. I prefer to blend the smoothies separately instead of all at once. The above recipe is for one serving, If you want to blend 2-3 smoothies at one time, simply multiply the ingredients. To make ahead, make two in the morning, one to drink and one to take with you and then make the last one fresh at night.',
  //   this.bookDetox.id,
  //   [
  //     {
  //       id: 'sm1',
  //       title: 'Pineapple Mint',
  //       description: 'Parsley is naturally detoxifying herb that has plenty of nutrients, and a zippy flavor. You wouldn’t think it would be good in a smoothie, but paired with the right ingredients, it’s delicious. Serves 1',
  //       imageUrl: 'url image',
  //       introduce: 'If following option 1, you can blend multiple servings at once. I prefer to blend the smoothies separately instead of all at once. The above recipe is for one serving, If you want to blend 2-3 smoothies at one time, simply multiply the ingredients. To make ahead, make two in the morning, one to drink and one to take with you and then make the last one fresh at night.',
  //       ingredients:[
  //         '1 cup/8oz filtered water',
  //         '1 handful (1cup/1oz/30g) spinach',
  //         '2 tbsp ground flax seed',
  //         '1 tbsp ground chia seeds',
  //         '1 green apple',
  //         '1/2 ripened pear',
  //         '1/4 cup parsley',
  //         '1/2 cup ice',
  //       ],
  //       directions:[
  //         'Put all of the ingredients in a blender and blend until smooth and creamy'
  //       ],
  //     }
  //   ]
  // ),

  // new DayDetail(
  //   'd3',
  //   'Day 3',
  //   // 'If following option 1, you can blend multiple servings at once. I prefer to blend the smoothies separately instead of all at once. The above recipe is for one serving, If you want to blend 2-3 smoothies at one time, simply multiply the ingredients. To make ahead, make two in the morning, one to drink and one to take with you and then make the last one fresh at night.',
  //   this.bookDetox.id,
  //   [
  //     {
  //       id: 'sm1',
  //       title: 'Ginger Raspberry',
  //       description: 'Parsley is naturally detoxifying herb that has plenty of nutrients, and a zippy flavor. You wouldn’t think it would be good in a smoothie, but paired with the right ingredients, it’s delicious. Serves 1',
  //       imageUrl: 'url image',
  //       introduce: 'If following option 1, you can blend multiple servings at once. I prefer to blend the smoothies separately instead of all at once. The above recipe is for one serving, If you want to blend 2-3 smoothies at one time, simply multiply the ingredients. To make ahead, make two in the morning, one to drink and one to take with you and then make the last one fresh at night.',
  //       ingredients:[
  //         '1 cup/8oz filtered water',
  //         '1 handful (1cup/1oz/30g) spinach',
  //         '2 tbsp ground flax seed',
  //         '1 tbsp ground chia seeds',
  //         '1 green apple',
  //         '1/2 ripened pear',
  //         '1/4 cup parsley',
  //         '1/2 cup ice',
  //       ],
  //       directions:[
  //         'Put all of the ingredients in a blender and blend until smooth and creamy'
  //       ],
  //     }
  //   ]
  // ),


  // new DayDetail(
  //   'd1',
  //   'Day 1 smoothie',
  //   // 'If following option 1, you can blend multiple servings at once. I prefer to blend the smoothies separately instead of all at once. The above recipe is for one serving, If you want to blend 2-3 smoothies at one time, simply multiply the ingredients. To make ahead, make two in the morning, one to drink and one to take with you and then make the last one fresh at night.',
  //   this._bookSmoothie.id,
  //   [
  //     {
  //       id: 'sm1',
  //       title: 'Chocolate Cherry',
  //       description: 'Parsley is naturally detoxifying herb that has plenty of nutrients, and a zippy flavor. You wouldn’t think it would be good in a smoothie, but paired with the right ingredients, it’s delicious. Serves 1',
  //       imageUrl: 'url image',
  //       introduce: 'If following option 1, you can blend multiple servings at once. I prefer to blend the smoothies separately instead of all at once. The above recipe is for one serving, If you want to blend 2-3 smoothies at one time, simply multiply the ingredients. To make ahead, make two in the morning, one to drink and one to take with you and then make the last one fresh at night.',
  //       ingredients:[
  //         '1 cup/8oz filtered water',
  //         '1 handful (1cup/1oz/30g) spinach',
  //         '2 tbsp ground flax seed',
  //         '1 tbsp ground chia seeds',
  //         '1 green apple',
  //         '1/2 ripened pear',
  //         '1/4 cup parsley',
  //         '1/2 cup ice',
  //       ],
  //       directions:[
  //         'Put all of the ingredients in a blender and blend until smooth and creamy'
  //       ],
  //     },
  //     {
  //       id: 'sm2',
  //       title: 'Tropical Blast',
  //       description: 'Parsley is naturally detoxifying herb that has plenty of nutrients, and a zippy flavor. You wouldn’t think it would be good in a smoothie, but paired with the right ingredients, it’s delicious. Serves 1',
  //       imageUrl: 'url image',
  //       introduce: 'If following option 1, you can blend multiple servings at once. I prefer to blend the smoothies separately instead of all at once. The above recipe is for one serving, If you want to blend 2-3 smoothies at one time, simply multiply the ingredients. To make ahead, make two in the morning, one to drink and one to take with you and then make the last one fresh at night.',
  //       ingredients:[
  //         '1 cup/8oz filtered water',
  //         '1 handful (1cup/1oz/30g) spinach',
  //         '2 tbsp ground flax seed',
  //         '1 tbsp ground chia seeds',
  //         '1 green apple',
  //         '1/2 ripened pear',
  //         '1/4 cup parsley',
  //         '1/2 cup ice',
  //       ],
  //       directions:[
  //         'Put all of the ingredients in a blender and blend until smooth and creamy'
  //       ],
  //     }
  //   ]
  // ),

  // new DayDetail(
  //   'd2',
  //   'Day 2',
  //   // 'If following option 1, you can blend multiple servings at once. I prefer to blend the smoothies separately instead of all at once. The above recipe is for one serving, If you want to blend 2-3 smoothies at one time, simply multiply the ingredients. To make ahead, make two in the morning, one to drink and one to take with you and then make the last one fresh at night.',
  //   this._bookSmoothie.id,
  //   [
  //     {
  //       id: 'sm1',
  //       title: 'Iced Pumpkin',
  //       description: 'Parsley is naturally detoxifying herb that has plenty of nutrients, and a zippy flavor. You wouldn’t think it would be good in a smoothie, but paired with the right ingredients, it’s delicious. Serves 1',
  //       imageUrl: 'url image',
  //       introduce: 'If following option 1, you can blend multiple servings at once. I prefer to blend the smoothies separately instead of all at once. The above recipe is for one serving, If you want to blend 2-3 smoothies at one time, simply multiply the ingredients. To make ahead, make two in the morning, one to drink and one to take with you and then make the last one fresh at night.',
  //       ingredients:[
  //         '1 cup/8oz filtered water',
  //         '1 handful (1cup/1oz/30g) spinach',
  //         '2 tbsp ground flax seed',
  //         '1 tbsp ground chia seeds',
  //         '1 green apple',
  //         '1/2 ripened pear',
  //         '1/4 cup parsley',
  //         '1/2 cup ice',
  //       ],
  //       directions:[
  //         'Put all of the ingredients in a blender and blend until smooth and creamy'
  //       ],
  //     },
  //     {
  //       id: 'sm2',
  //       title: 'Caramel Apple',
  //       description: 'Parsley is naturally detoxifying herb that has plenty of nutrients, and a zippy flavor. You wouldn’t think it would be good in a smoothie, but paired with the right ingredients, it’s delicious. Serves 1',
  //       imageUrl: 'url image',
  //       introduce: 'If following option 1, you can blend multiple servings at once. I prefer to blend the smoothies separately instead of all at once. The above recipe is for one serving, If you want to blend 2-3 smoothies at one time, simply multiply the ingredients. To make ahead, make two in the morning, one to drink and one to take with you and then make the last one fresh at night.',
  //       ingredients:[
  //         '1 cup/8oz filtered water',
  //         '1 handful (1cup/1oz/30g) spinach',
  //         '2 tbsp ground flax seed',
  //         '1 tbsp ground chia seeds',
  //         '1 green apple',
  //         '1/2 ripened pear',
  //         '1/4 cup parsley',
  //         '1/2 cup ice',
  //       ],
  //       directions:[
  //         'Put all of the ingredients in a blender and blend until smooth and creamy'
  //       ],
  //     }
  //   ]
  // ),

  // new DayDetail(
  //   'd3',
  //   'Day 3',
  //   // 'If following option 1, you can blend multiple servings at once. I prefer to blend the smoothies separately instead of all at once. The above recipe is for one serving, If you want to blend 2-3 smoothies at one time, simply multiply the ingredients. To make ahead, make two in the morning, one to drink and one to take with you and then make the last one fresh at night.',
  //   this._bookSmoothie.id,
  //   [
  //     {
  //       id: 'sm1',
  //       title: 'Peanut Butter Bliss',
  //       description: 'Parsley is naturally detoxifying herb that has plenty of nutrients, and a zippy flavor. You wouldn’t think it would be good in a smoothie, but paired with the right ingredients, it’s delicious. Serves 1',
  //       imageUrl: 'url image',
  //       introduce: 'If following option 1, you can blend multiple servings at once. I prefer to blend the smoothies separately instead of all at once. The above recipe is for one serving, If you want to blend 2-3 smoothies at one time, simply multiply the ingredients. To make ahead, make two in the morning, one to drink and one to take with you and then make the last one fresh at night.',
  //       ingredients:[
  //         '1 cup/8oz filtered water',
  //         '1 handful (1cup/1oz/30g) spinach',
  //         '2 tbsp ground flax seed',
  //         '1 tbsp ground chia seeds',
  //         '1 green apple',
  //         '1/2 ripened pear',
  //         '1/4 cup parsley',
  //         '1/2 cup ice',
  //       ],
  //       directions:[
  //         'Put all of the ingredients in a blender and blend until smooth and creamy'
  //       ],
  //     },
  //     {
  //       id: 'sm2',
  //       title: 'Super Pumpkin',
  //       description: 'Parsley is naturally detoxifying herb that has plenty of nutrients, and a zippy flavor. You wouldn’t think it would be good in a smoothie, but paired with the right ingredients, it’s delicious. Serves 1',
  //       imageUrl: 'url image',
  //       introduce: 'If following option 1, you can blend multiple servings at once. I prefer to blend the smoothies separately instead of all at once. The above recipe is for one serving, If you want to blend 2-3 smoothies at one time, simply multiply the ingredients. To make ahead, make two in the morning, one to drink and one to take with you and then make the last one fresh at night.',
  //       ingredients:[
  //         '1 cup/8oz filtered water',
  //         '1 handful (1cup/1oz/30g) spinach',
  //         '2 tbsp ground flax seed',
  //         '1 tbsp ground chia seeds',
  //         '1 green apple',
  //         '1/2 ripened pear',
  //         '1/4 cup parsley',
  //         '1/2 cup ice',
  //       ],
  //       directions:[
  //         'Put all of the ingredients in a blender and blend until smooth and creamy'
  //       ],
  //     }
  //   ]
  // ),


interface ShoppingListData{
  bookId: string;
  ingredients: {
    component:  string[];
    title: string;
  }[];
  title: string
}

interface DayDetailData{
  title: string,
  bookId: string,
  smoothie: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    introduce: string;
    ingredients: string[];
    directions: string[];
  }[],
}


@Injectable({
  providedIn: 'root'
})
export class SmoothieGuideService {
  private _bookDetox = new Book(
    'b3',
    '3 Day Detox',
    // this.shoppingListDetox,
    // this.dayDetox,
  );

  private _bookSmoothie = new Book(
    'b21',
    'The Smoothie Diet',
    // this.shoppingListSmoothie,
    // this.dayDetox,
  );

  private _shoppingListDetox = new BehaviorSubject<ShoppingList>(
    new ShoppingList(
      '',
      '',
      '',
      []
    )
  );

  private _shoppingListSmoothie = new BehaviorSubject<ShoppingList[]>([]);

  private _dayDetox = new BehaviorSubject<DayDetail[]>([]);

  //Day of 21 day smoothie diet
  private _dayDiet = new BehaviorSubject<DayDetail[]>([]);

  constructor(private http: HttpClient) {
  }

  get bookDetox(){
    // eslint-disable-next-line no-underscore-dangle
    return this._bookDetox;
  }

  get bookSmoothie(){
    // eslint-disable-next-line no-underscore-dangle
    return this._bookSmoothie;
  }

  get shoppingListDetox(){
    // eslint-disable-next-line no-underscore-dangle
    return this._shoppingListDetox;
  }

  get shoppingListSmoothie(){
    // eslint-disable-next-line no-underscore-dangle
    return this._shoppingListSmoothie;
  }

  get dayDetox(){
    // eslint-disable-next-line no-underscore-dangle
    return this._dayDetox;
  }

  get dayDiet(){// eslint-disable-next-line no-underscore-dangle
    return this._dayDiet;
  }

  // getDayDetox(id: string){
  //   // eslint-disable-next-line no-underscore-dangle
  //   // return {...this._dayDetox.find(d => d.id === id)}
  // }
  // --------------------------------------------------------------------------------------------------------------------------------------------------------
  // --------------------------------------------------------------------------------------------------------------------------------------------------------
  // --------------------------------------------------------------------------------------------------------------------------------------------------------

  // SHOPPING LIST DETOX

  // --------------------------------------------------------------------------------------------------------------------------------------------------------
  // --------------------------------------------------------------------------------------------------------------------------------------------------------
  // --------------------------------------------------------------------------------------------------------------------------------------------------------


  addShoppingListDetox(){
    let generatedId: string;
    const newShoppingListSmoothie =
    new ShoppingList(
      '3day',
      'Detox Shopping List test get',
      // eslint-disable-next-line no-underscore-dangle
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
    return this.http.post<{name: string}>('https://smoothiedietapp-default-rtdb.asia-southeast1.firebasedatabase.app/ShoppingListDetox.json',{
      ...newShoppingListSmoothie,
      id: null
    })
    .pipe(
      switchMap(resData => {
        generatedId = resData.name;
        return this.shoppingListDetox;
      }),
      take(1),
      tap(() => {
        newShoppingListSmoothie.id = generatedId;
        this._shoppingListDetox.next(newShoppingListSmoothie);
    }))
  }

  getShoppingListDetox(id: string){
    return this.http
      .get<ShoppingListData>(
        `https://smoothiedietapp-default-rtdb.asia-southeast1.firebasedatabase.app/ShoppingListDetox/${id}.json`
      )
      .pipe(
        map(shoppingListDetoxData => {
          return new ShoppingList(
            id,
            shoppingListDetoxData.title,
            shoppingListDetoxData.bookId,
            shoppingListDetoxData.ingredients
          )
        })
      );
  }

  fetchShoppingListDetox(){
    return this.http
      .get<{[key:string]: ShoppingListData}>('https://smoothiedietapp-default-rtdb.asia-southeast1.firebasedatabase.app/ShoppingListDetox.json')
      .pipe(
        map(resData => {
          let shoppingListDetox: ShoppingList;
          for(const key in resData){
            if(resData.hasOwnProperty(key)){
              shoppingListDetox = new ShoppingList(
                key,
                resData[key].title,
                resData[key].bookId,
                resData[key].ingredients
              )
            }
          }
          return shoppingListDetox;
        }),
        tap(shoppingListDetox => {
          this._shoppingListDetox.next(shoppingListDetox)
        })
        // ,
        // tap(places => {
        //   this._place.next(places);
        // })
      );
  }

  // --------------------------------------------------------------------------------------------------------------------------------------------------------
  // --------------------------------------------------------------------------------------------------------------------------------------------------------
  // --------------------------------------------------------------------------------------------------------------------------------------------------------

  // SHOPPING LIST SMOOTHIE DIET

  // --------------------------------------------------------------------------------------------------------------------------------------------------------
  // --------------------------------------------------------------------------------------------------------------------------------------------------------
  // --------------------------------------------------------------------------------------------------------------------------------------------------------

  fetchShoppingListSmoothie(){
    return this.http
      .get<{[key:string]: ShoppingListData}>('https://smoothiedietapp-default-rtdb.asia-southeast1.firebasedatabase.app/ShoppingListSmoothie.json')
      .pipe(
        map(resData => {
          const shoppingListSmoothie = [];
          for(const key in resData){
            if(resData.hasOwnProperty(key)){
              shoppingListSmoothie.push(
                new ShoppingList(
                  key,
                  resData[key].title,
                  resData[key].bookId,
                  resData[key].ingredients
                )
              )
            }
          }
          return shoppingListSmoothie;
          // return [];
        }),
        tap(shoppingListSmoothie => {
          this._shoppingListSmoothie.next(shoppingListSmoothie);
        })
      );
  }

  getShoppingListSmoothie(id: string){
    // eslint-disable-next-line no-underscore-dangle
    return this.http
      .get<ShoppingListData>(
        `https://smoothiedietapp-default-rtdb.asia-southeast1.firebasedatabase.app/ShoppingListSmoothie/${id}.json`
      )
      .pipe(
        map(shoppingListSmoothieData => {
          return new ShoppingList(
            id,
            shoppingListSmoothieData.title,
            shoppingListSmoothieData.bookId,
            shoppingListSmoothieData.ingredients
          );
        })
      );
  }

  addShoppingListSmoothie(){
    let generatedId: string;
    const newShoppingListSmoothie = new ShoppingList(
      'w1',
      'Week 2 Shopping List',
      // eslint-disable-next-line no-underscore-dangle
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
        },
        {
          title: 'Frozen Fruit',
          component: ['Strawberries (1 cup/5oz)',
          'Dark Sweet Cherries (1 cup/5oz)',
          'Raspberries (1 cup/5oz)',
          'Pineapple Chunks (1 cup/5oz)']
        },
        {
          title: 'Liquid',
          component: ['Coconut Water (5 cups/40oz)',
          'Unsweetened Coconut Milk In a carton (3 cups/24oz)',
          'Unsweetened Almond Milk (5 cups/40oz)',
          ]
        }
      ]
    );
    return this.http.post<{name: string}>('https://smoothiedietapp-default-rtdb.asia-southeast1.firebasedatabase.app/ShoppingListSmoothie.json',{
      ...newShoppingListSmoothie,
      id: null
    })
    .pipe(
      switchMap(resData => {
        generatedId = resData.name;
        return this.shoppingListSmoothie;
      }),
      take(1),
      tap(shoppingListSmoothie => {
        newShoppingListSmoothie.id = generatedId;
        this._shoppingListSmoothie.next(shoppingListSmoothie.concat(newShoppingListSmoothie));
    }))
    // return this.places.pipe(
    //   take(1),
    //   delay(1000),
    //   tap(places => {
    //     this._place.next(places.concat(newPlace));
    //   })
    // );
  }

  // --------------------------------------------------------------------------------------------------------------------------------------------------------
  // --------------------------------------------------------------------------------------------------------------------------------------------------------
  // --------------------------------------------------------------------------------------------------------------------------------------------------------

  // DAY OF 3 DAY

  // --------------------------------------------------------------------------------------------------------------------------------------------------------
  // --------------------------------------------------------------------------------------------------------------------------------------------------------
  // --------------------------------------------------------------------------------------------------------------------------------------------------------

  fetchDayDetox(){
    return this.http
      .get<{[key:string]: DayDetailData}>('https://smoothiedietapp-default-rtdb.asia-southeast1.firebasedatabase.app/DayDetox.json')
      .pipe(
        map(resData => {
          const dayDetox = [];
          for(const key in resData){
            if(resData.hasOwnProperty(key)){
              dayDetox.push(
                new DayDetail(
                  key,
                  resData[key].title,
                  resData[key].bookId,
                  resData[key].smoothie
                )
              )
            }
          }
          return dayDetox;
          // return [];
        }),
        tap(dayDetox => {
          this._dayDetox.next(dayDetox);
        })
      );
  }

  getDayDetox(id: string){
    // eslint-disable-next-line no-underscore-dangle
    return this.http
      .get<DayDetailData>(
        `https://smoothiedietapp-default-rtdb.asia-southeast1.firebasedatabase.app/DayDetox/${id}.json`
      )
      .pipe(
        map(dayDetailData => {
          return new DayDetail(
            id,
            dayDetailData.title,
            dayDetailData.bookId,
            dayDetailData.smoothie
          );
        })
      );
  }

  addDayDetox(){
    let generatedId: string;
    const newDayDetox = new DayDetail(
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
    );
    return this.http.post<{name: string}>('https://smoothiedietapp-default-rtdb.asia-southeast1.firebasedatabase.app/DayDetox.json',{
      ...newDayDetox,
      id: null
    })
    .pipe(
      switchMap(resData => {
        generatedId = resData.name;
        return this.dayDetox;
      }),
      take(1),
      tap(dayDetox => {
        newDayDetox.id = generatedId;
        this._dayDetox.next(dayDetox.concat(newDayDetox));
    }))
    // return this.places.pipe(
    //   take(1),
    //   delay(1000),
    //   tap(places => {
    //     this._place.next(places.concat(newPlace));
    //   })
    // );
  }
  // --------------------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------

// DAY OF 21 DAY

// --------------------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------


  fetchDaySmoothie(){
    return this.http
      .get<{[key:string]: DayDetailData}>('https://smoothiedietapp-default-rtdb.asia-southeast1.firebasedatabase.app/DaySmoothie.json')
      .pipe(
        map(resData => {
          const daySmoothie = [];
          for(const key in resData){
            if(resData.hasOwnProperty(key)){
              daySmoothie.push(
                new DayDetail(
                  key,
                  resData[key].title,
                  resData[key].bookId,
                  resData[key].smoothie
                )
              )
            }
          }
          return daySmoothie;
          // return [];
        }),
        tap(daySmoothie => {
          this._dayDiet.next(daySmoothie);
        })
      );
  }

  getDaySmoothie(id: string){
    // eslint-disable-next-line no-underscore-dangle
    return this.http
      .get<DayDetailData>(
        `https://smoothiedietapp-default-rtdb.asia-southeast1.firebasedatabase.app/DaySmoothie/${id}.json`
      )
      .pipe(
        map(dayDetailData => {
          return new DayDetail(
            id,
            dayDetailData.title,
            dayDetailData.bookId,
            dayDetailData.smoothie
          );
        })
      );
  }

  addDaySmoothie(){
    let generatedId: string;
    const newDaySmoothie = new DayDetail(
      'd1',
      'Day 1',
      // 'If following option 1, you can blend multiple servings at once. I prefer to blend the smoothies separately instead of all at once. The above recipe is for one serving, If you want to blend 2-3 smoothies at one time, simply multiply the ingredients. To make ahead, make two in the morning, one to drink and one to take with you and then make the last one fresh at night.',
      this.bookSmoothie.id,
      [
        {
          id: 'sm1',
          title: 'Chocolate Cherry',
          description: 'Cocoa powder and dark sweet cherries make this super dark smoothie high in antioxidants and fiber, while almond milk adds creaminess. Don’t be fooled by the taste of this delicious drink; this smoothie is a meal, and a filling meal at that. Serves 1',
          imageUrl: 'url image',
          introduce: 'If following option 1, you can blend multiple servings at once. I prefer to blend the smoothies separately instead of all at once. The above recipe is for one serving, If you want to blend 2-3 smoothies at one time, simply multiply the ingredients. To make ahead, make two in the morning, one to drink and one to take with you and then make the last one fresh at night.',
          ingredients:[
            '1 cup/8oz unsweetened almond milk',
            '1 tbsp unsweetened cocoa powder',
            '1 tbsp unsweetened almond butter',
            '1 handful (1cup/1oz/30g) spinach',
            '1 medium banana',
            '1 cup/5 oz frozen dark sweet cherries',
            '1 tsp virgin coconut oil',
            '1 tsp honey if needed',
          ],
          directions:[
            '1. Add the milk, cocoa, almond butter, and spinach to your blender. Blend until smooth.',
            '2. Add the banana, frozen cherries and coconut oil; continue blending until smooth and creamy.'
          ],
        },
        {
          id: 'sm2',
          title: 'Tropical Blast',
          description: 'This smoothie is sweet and creamy, yet it’s also filling enough to enjoy for meal. Unsweetened shredded coconut adds fiber as well as plenty of coconut flavor to this delicious drink. Use coconut milk from a carton like So Delicious, Almond Breeze, or Silk instead of a can for less fat and calories. Serves 1',
          imageUrl: 'url image',
          introduce: 'If following option 1, you can blend multiple servings at once. I prefer to blend the smoothies separately instead of all at once. The above recipe is for one serving, If you want to blend 2-3 smoothies at one time, simply multiply the ingredients. To make ahead, make two in the morning, one to drink and one to take with you and then make the last one fresh at night.',
          ingredients:[
            '1 cup/8oz coconut milk from a carton, such as Almond Breeze, So Delicious or Silk',
            '1 handful (1cup/1oz/30g) kale leaves',
            '1 mango, skin and pit removed',
            '1/2 cup/3oz frozen pineapple chunks',
            '2 tbsp unsweetened coconut (shredded or flakes)',
          ],
          directions:[
            '1. Add the coconut milk, coconut flakes, and kale to your blender. Blend until smooth',
            '2. Add the mango and frozen pineapple and continue to blend until smooth and creamy.'
          ],
        }
      ]
    );
    return this.http.post<{name: string}>('https://smoothiedietapp-default-rtdb.asia-southeast1.firebasedatabase.app/DaySmoothie.json',{
      ...newDaySmoothie,
      id: null
    })
    .pipe(
      switchMap(resData => {
        generatedId = resData.name;
        return this.dayDiet;
      }),
      take(1),
      tap(dayDetox => {
        newDaySmoothie.id = generatedId;
        this._dayDiet.next(dayDetox.concat(newDaySmoothie));
    }))
    // return this.places.pipe(
    //   take(1),
    //   delay(1000),
    //   tap(places => {
    //     this._place.next(places.concat(newPlace));
    //   })
    // );
  }
}

