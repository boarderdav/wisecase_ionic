import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { PostPage } from '../post/post';

import { SettingsTPage } from '../settings-t/settings-t';

@Component({
  selector: 'page-estimate',
  templateUrl: 'estimate.html'
})

export class EstimatePage {

  postPage = PostPage;
  settingsTPage = SettingsTPage;
  constructor(public navCtrl: NavController) {

  }

}

