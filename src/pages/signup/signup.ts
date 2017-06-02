import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { NgForm } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';
import { UserData } from '../../providers/user-data';


/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
// export class SignupPage {

//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad SignupPage');
//   }

// }

export class SignupPage {
  signup: {username?: string, password?: string} = {};
  submitted = false;
  message: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userData: UserData, public events: Events) {
    this.message = '';
    this.events.subscribe('user:signup_signup.ts', (data: any) => {
      this.message = data;
    });
  }

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.signup(this.signup.username, this.signup.password);
    }
  }
}
