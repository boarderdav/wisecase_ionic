import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { Database } from '@ionic/cloud-angular';
import { PostPage } from '../post/post';
import { SettingsTPage } from '../settings-t/settings-t';

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'page-estimate',
  templateUrl: 'estimate.html'
})

export class EstimatePage {

  // public posts: Array<string>;
  // public postsMessage:string = '';
  // public postsTitle:string = '';
  // public postsName:string = '';
  // public myDate:string = '';
  // public postsEstimate:any = '';

  // Firebase Database List 
  post: FirebaseObjectObservable<any[]>;

  postPage = PostPage;
  settingsTPage = SettingsTPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, afDB: AngularFireDatabase) {

    this.post = afDB.object('/posts');


  	// this.db.connect();
   //  this.db.collection('posts').order('created','descending').watch().subscribe( (posts) => {
   //    console.dir(posts);
   //    this.posts = posts;
   //  }, (error) => {
   //    console.error(error);
   //  });
  }


// Working Save, Update, & Delete
  save(newName: string) {
    this.post.set({ name: newName });
  }
  update(newSize: string) {
    this.post.update({ size: newSize });
  }
  delete() {
    this.post.remove();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EstimatePage');
  }

}


