import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { PostPage } from '../post/post';

@Component({
  selector: 'page-estimate',
  templateUrl: 'estimate.html'
})

export class EstimatePage {

  postPage = PostPage;
  constructor(public navCtrl: NavController) {

  }

}

