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
    );
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
    }));
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
          )
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
      'Day 3',
      // 'If following option 1, you can blend multiple servings at once. I prefer to blend the smoothies separately instead of all at once. The above recipe is for one serving, If you want to blend 2-3 smoothies at one time, simply multiply the ingredients. To make ahead, make two in the morning, one to drink and one to take with you and then make the last one fresh at night.',
      this.bookDetox.id,
      [
        {
          id: 'sm3',
          title: 'Ginger Raspberry',
          description: 'Ginger is great for detoxing — it will help soothe any upset stomachs you get from adjusting your diet. When paired with raspberries, it’s a perfect combination. Serves 1',
          imageUrl: 'url image',
          introduce: 'If following option 1, you can blend multiple servings at once. I prefer to blend the smoothies separately instead of all at once. The above recipe is for one serving, If you want to blend 2-3 smoothies at one time, simply multiply the ingredients. To make ahead, make two in the morning, one to drink and one to take with you and then make the last one fresh at night.',
          ingredients:[
            '3/4 cup/6oz unsweetened almond milk',
            '1 cup/5oz frozen raspberries',
            '1 handful (1cup/1oz/30g) romaine',
            '1/2 banana',
            '1 inch ginger peeled and grated',
            '2 tbsp ground flax',
            '2 tbsp unsweetened coconut flakes',
          ],
          directions:[
            'Put all of the ingre- dients in a blender and blend until smooth and creamy.'
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
      'Day 7',
      // 'If following option 1, you can blend multiple servings at once. I prefer to blend the smoothies separately instead of all at once. The above recipe is for one serving, If you want to blend 2-3 smoothies at one time, simply multiply the ingredients. To make ahead, make two in the morning, one to drink and one to take with you and then make the last one fresh at night.',
      this.bookSmoothie.id,
      [
        {
          id: 'sm1',
          title: 'Green Energy',
          description: 'Feeling a little bit under the weather? This potassium loaded smoothie will revitalize you while helping your body flush out toxins. And the frozen melon and banana gives an amazing frothy texture that really brings out the flavor of the melon and dampens the slightly bitter taste of the kale. Add a few mint leaves for an even fresher taste.',
          imageUrl: 'url image',
          introduce: 'If following option 1, you can blend multiple servings at once. I prefer to blend the smoothies separately instead of all at once. The above recipe is for one serving, If you want to blend 2-3 smoothies at one time, simply multiply the ingredients. To make ahead, make two in the morning, one to drink and one to take with you and then make the last one fresh at night.',
          ingredients:[
            '1 cup/8oz coconut milk',
            '1 tbsp rolled oats',
            '1 tbsp unsweetened coconut',
            '1 cup cantaloupe melon, diced, frozen',
            '1 banana (chopped and frozen)',
            '1 handful (1cup/1oz/30g) kale leaves',
            'Juice of 1/2 lime',
          ],
          directions:[
            '1.Add the coconut milk and oats to your blender and allow it to sit for a few minutes to soften the oats.',
            '2.Add in the coconut flakes, melon and banana. Blend for 10 seconds.'
          ],
        },
        {
          id: 'sm2',
          title: 'Wonderful Berries',
          description: 'The frozen raspberries combined with the coconut milk, rolled oats and banana give a sorbet- like texture and flavor to this smoothie. And the lettuce taste is so mild that you’ll barely notice it. For a more nut-like flavor, use toasted wheat germ and ground it in your blender. If you’re using raw wheat germ, store it in your freezer to prevent it from becoming rancid.',
          imageUrl: 'url image',
          introduce: 'If following option 1, you can blend multiple servings at once. I prefer to blend the smoothies separately instead of all at once. The above recipe is for one serving, If you want to blend 2-3 smoothies at one time, simply multiply the ingredients. To make ahead, make two in the morning, one to drink and one to take with you and then make the last one fresh at night.',
          ingredients:[
            '1 cup/8oz coconut milk',
            '2 tbsp ground wheat germ',
            '1/4 cup rolled oats',
            '1 handful (1cup/1oz/30g) romaine lettuce',
            '1 medium banana',
            '1 cup frozen raspberries',
            '1 tsp honey if needed',
          ],
          directions:[
            '1. Add the coconut milk, ground wheat germ and oats to your blender and allow it to sit for a few minutes to soften the oats. Blend for 30 seconds.',
            '2. Add the lettuce and blend for 30 more seconds.'
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

