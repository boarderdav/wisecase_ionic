import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { UserData } from '../../providers/user-data';

/**
 * Generated class for the AccountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  username: string;


  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public alertCtrl: AlertController,
  	public userData: UserData,
    public events: Events) {
  	//console.log(this.nav.getActive());
    this.events.subscribe('resetPassword', (data: any) => {
      console.log(data);
      this.presentAlert(data);
    });
  }

  ngAfterViewInit() {
    this.getUsername();
  }

  getUsername() {
    this.userData.getUsername().then((username) => {
      this.username = username;
    });
  }

  changePassword() {
    this.userData.resetPassword(this.username);
  }

  logout() {
    this.userData.logout();
    this.navCtrl.setRoot(LoginPage);
  }

  presentAlert(alertText: any) {
    let alert = this.alertCtrl.create({
      title: 'Info',
      subTitle: alertText,
      buttons: ['Ok']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

}
