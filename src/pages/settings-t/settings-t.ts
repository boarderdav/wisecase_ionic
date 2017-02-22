
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { FacebookAuth, User, Auth } from '@ionic/cloud-angular';


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
  constructor(public facebookAuth: FacebookAuth, public user: User, public navCtrl: NavController, public auth:Auth) {}

  doFacebook() {
    console.log('do FB');
    this.facebookAuth.login().then(() => {
      this.navCtrl.setRoot(TabsPage);
    });
  }

}


// export class SettingsTPage {
//   constructor(app: App, menu: MenuController) {
//     menu.enable(true);
//   }
// }


