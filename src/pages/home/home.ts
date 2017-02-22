import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { PostPage } from '../post/post';
import { EstimatePage } from '../estimate/estimate';
import { SettingsTPage } from '../settings-t/settings-t';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  postPage = PostPage;	
  tab2Root: any = EstimatePage;
  settingsTPage = SettingsTPage;
  constructor(public navCtrl: NavController) {  }

}

