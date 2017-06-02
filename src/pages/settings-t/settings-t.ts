
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


//this is the old stuff to uncomment out

  // settingsTPage = SettingsTPage;
  // homePage = TabsPage;
  // constructor(public navCtrl: NavController) {}

//this is the old stuff end to uncomment out



  // doFacebook() {
  //   console.log('do FB');
  //   this.facebookAuth.login().then(() => {
  //     this.navCtrl.setRoot(TabsPage);
  //   });
  // }



  // login() {
  //   facebookConnectPlugin.login(['email'], function(response) {
  //     alert('Logged in');
  //     alert(JSON.stringify(response.authResponse));
  //   }, function(error){
  //     alert(error);
  //   })
  // }

  // getdetails() {
  //   facebookConnectPlugin.getLoginStatus((response) => {
  //     if(response.status == "connected") {
  //       facebookConnectPlugin.api('/' + response.authResponse.userID + '?fields=id,name,gender',[],function onSuccess(result) {
  //         alert(JSON.stringify(result));
  //       },
  //       function onError(error) {
  //         alert(error);
  //       }
  //       );
  //     }
  //     else {
  //       alert('Not logged in');
  //     }
  //   })
  // }

  // logout() {
  //   facebookConnectPlugin.logout((response) => {
  //     alert(JSON.stringify(response));
  //   })
  // }


// }


// export class SettingsTPage {
//   constructor(app: App, menu: MenuController) {
//     menu.enable(true);
//   }
// }

}
