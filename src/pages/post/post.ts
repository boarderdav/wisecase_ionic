import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Database } from '@ionic/cloud-angular';
import { EstimatePage } from '../estimate/estimate';


@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})

export class PostPage {
  public posts: Array<string>;
  public postsMessage:string = '';
  public postsTitle:string = '';
  public postsName:string = '';
  public myDate:string = '';
  public postsEstimate:any = '';
  tab2Root: any = EstimatePage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db:Database) {
  	this.db.connect();
    this.db.collection('posts').order('created','descending').watch().subscribe( (posts) => {
      console.dir(posts);
      this.posts = posts;
    }, (error) => {
      console.error(error);
    });


  }

  createPost() {
    this.db.collection('posts').store({
    	description:this.postsMessage, 
    	type:this.postsTitle, 
    	name:this.postsName, 
    	date:this.myDate, 
    	price:this.postsEstimate,
    	created:Date.now()
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostPage');
  }

}
