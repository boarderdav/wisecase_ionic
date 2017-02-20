import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PostPage } from '../post/post';

/*
  Generated class for the Invoices page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-invoices',
  templateUrl: 'invoices.html'
})
export class InvoicesPage {
  postPage = PostPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoicesPage');
  }

}
