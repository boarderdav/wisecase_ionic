
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

// import { FacebookAuth, User, Auth } from '@ionic/cloud-angular';

//import { NativeStorage } from 'ionic-native';


//import { HomePage } from '../home/home';

import { TabsPage } from '../tabs/tabs';

// import { SettingsTPage } from '../settings-t/settings-t';

@Component({
  selector: 'page-estimate',
  templateUrl: 'settings-t.html'
})

export class SettingsTPage {

  // postPage = PostPage;
  settingsTPage = SettingsTPage;
  homePage = TabsPage;
  constructor(public navCtrl: NavController) {}

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
