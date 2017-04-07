import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Database } from '@ionic/cloud-angular';
import { PostPage } from '../post/post';
import { SettingsTPage } from '../settings-t/settings-t';

@Component({
  selector: 'page-estimate',
  templateUrl: 'estimate.html'
})

export class EstimatePage {

  public posts: Array<string>;
  public postsMessage:string = '';
  public postsTitle:string = '';
  public postsName:string = '';
  public myDate:string = '';
  public postsEstimate:any = '';

  postPage = PostPage;
  settingsTPage = SettingsTPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public db:Database) {
  	this.db.connect();
    this.db.collection('posts').order('created','descending').watch().subscribe( (posts) => {
      console.dir(posts);
      this.posts = posts;
    }, (error) => {
      console.error(error);
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EstimatePage');
  }

}


