import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { NgForm } from '@angular/forms';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { UserData } from '../../providers/user-data';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  login: {username?: string, password?: string} = {};
  submitted = false;
  message: any;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams, 
  	public userData: UserData, 
  	public events: Events) {
    this.message = '';
    this.events.subscribe('user:login_login.ts', (data: any) => {
      this.message = data;
    });
  }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username, this.login.password);
      //this.navCtrl.push(TabsPage);
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}



