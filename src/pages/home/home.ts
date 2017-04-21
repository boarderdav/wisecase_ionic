import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { PostPage } from '../post/post';
import { EstimatePage } from '../estimate/estimate';
import { SettingsTPage } from '../settings-t/settings-t';
import { AboutPage } from '../about/about';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  postPage = PostPage;	
  tab2Root: any = EstimatePage;
  settingsTPage = SettingsTPage;
  aboutPage = AboutPage;
  constructor(public navCtrl: NavController) {  }

}
