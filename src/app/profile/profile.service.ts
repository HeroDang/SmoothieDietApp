import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { User } from './user.module';

interface UserData{
   fullname: string,
   email: string,
   bookId: string,
   phone: number,
   gender: string,
   password: string,
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private _user = new BehaviorSubject<User[]>([]);

  constructor(private http: HttpClient) { }

  get user(){
    return this._user;
  }


  fetchUser(){
    return this.http
      .get<{[key:string]: UserData}>('https://smoothiedietapp-default-rtdb.asia-southeast1.firebasedatabase.app/user.json')
      .pipe(
        map(resData => {
          const users = [];
          for(const key in resData){
            if(resData.hasOwnProperty(key)){
              users.push(
                new User(
                  key,
                  resData[key].fullname,
                  resData[key].email,
                  resData[key].bookId,
                  resData[key].phone,
                  resData[key].gender,
                  resData[key].password,
                )
              )
            }
          }
          return users;
          // return [];
        }),
        tap(users => {
          this._user.next(users);
        })
      );
  }

  getUser(id: string){
    // eslint-disable-next-line no-underscore-dangle
    return this.http
      .get<UserData>(
        `https://smoothiedietapp-default-rtdb.asia-southeast1.firebasedatabase.app/user/${id}.json`
      )
      .pipe(
        map(userData => {
          return new User(
            id,
            userData.fullname,
            userData.email,
            userData.bookId,
            userData.phone,
            userData.gender,
            userData.password,
          );
        })
      );
  }

  addPlace(){
    let generatedId: string;
    const newUser = new User(
      Math.random().toString(),
      'Pham Thanh Phong',
      'phong@gmail.com',
      'book002',
      84987451263,
      'male',
      '123456abc'
    );
    return this.http.post<{name: string}>('https://smoothiedietapp-default-rtdb.asia-southeast1.firebasedatabase.app/user.json',{
      ...newUser,
      id: null
    })
    .pipe(
      switchMap(resData => {
        generatedId = resData.name;
        return this.user;
      }),
      take(1),
      tap(users => {
        newUser.id = generatedId;
        this._user.next(users.concat(newUser));
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
