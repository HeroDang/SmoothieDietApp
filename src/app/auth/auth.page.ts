import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ProfileService } from '../profile/profile.service';
import { User } from '../profile/user.module';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit, OnDestroy {
  isLoading = false;
  isLogin = true;
  users: User[];
  usersSub: Subscription;

  constructor(private authService: AuthService, private route: Router, private loadingCtrl: LoadingController, private proService: ProfileService, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.usersSub = this.proService.user.subscribe(users => {
      this.users = users;
    })

  }

  ionViewWillEnter(){
    this.proService.fetchUser().subscribe(
    );
  }

  onLogin(form: NgForm){
    this.isLoading = true;
    this.authService.login();
    this.loadingCtrl
      .create({keyboardClose: true, message:'Logging in...'})
      .then(loadingEl => {
        loadingEl.present();
        setTimeout(() => {
          this.isLoading=false;
          loadingEl.dismiss();
        },100);
      });

      for(let user of this.users){
        if(form.value.phoneNumber === user.phone){
          if(form.value.password === user.password){
            this.route.navigateByUrl('/smoothie-guide/tabs/e-book');
            return;
          }else{
            this.alertCtrl.create({
              header: 'Wrong password',
              message: 'Please enter new password.',
              buttons:[{text:'Okey', handler: () => {
                this.alertCtrl.dismiss();
                }
              }]
            }).then(alertEl =>{
              alertEl.present();
            })

            return;
          }
        }else{
          this.alertCtrl.create({
            header: 'Phone number does not exist',
            message: 'please enter new number.',
            buttons:[{text:'Okey', handler: () => {
              this.alertCtrl.dismiss();
              }
            }]
          }).then(alertEl =>{
            alertEl.present();
          })

          return;
        }
      }
  }


  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }
    const phoneNumber = form.value.phoneNumber;
    const password = form.value.password;
    console.log(phoneNumber, password);

    if(this.isLogin){
      //send a request to login servers
    }
    else{
      //send a request to sinup servers
    }
  }

  onAddUser(){
    this.proService.addPlace().subscribe(() =>
      console.log('done')
    );
  }

  ngOnDestroy(): void {
    if(this.usersSub){
      this.usersSub.unsubscribe();
    }
  }

}
