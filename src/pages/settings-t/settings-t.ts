
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController, Events } from 'ionic-angular';

// import { FacebookAuth, User, Auth } from '@ionic/cloud-angular';

//import { NativeStorage } from 'ionic-native';


//import { HomePage } from '../home/home';

// import { TabsPage } from '../tabs/tabs';
import { UserData } from '../../providers/user-data';

// import { SettingsTPage } from '../settings-t/settings-t';

@Component({
  selector: 'page-estimate',
  templateUrl: 'settings-t.html'
})

export class SettingsTPage {

// this is new info
  login: {username?: string, password?: string} = {};
  submitted = false;
  message: any;

  constructor(public navCtrl: NavController, public userData: UserData, public events: Events) {
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
  //this is end of new stuff



}
