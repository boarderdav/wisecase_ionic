import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
// import { Facebook, NativeStorage } from 'ionic-native';


import { TabsPage } from '../pages/tabs/tabs';

//add pages to show up in toggle menu here

import { PostPage } from '../pages/post/post';
import { SettingsPage } from '../pages/settings/settings';
import { SettingsTPage } from '../pages/settings-t/settings-t';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  // rootPage = TabsPage;
  rootPage = SettingsTPage;
  //rootPage: any = SettingsPage;
  postPage = PostPage;
  settingsPage = SettingsPage

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

  // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: TabsPage },
      { title: 'Settings', component: SettingsPage },
      { title: 'Privacy', component: PostPage },
      { title: 'Sign out', component: PostPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }





    //platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //StatusBar.styleDefault();
      //Splashscreen.hide();
    //});
  //}






}
