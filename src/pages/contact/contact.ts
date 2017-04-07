import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Database } from '@ionic/cloud-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPage {
  public chats: Array<string>;
  public message:string = '';

  public posts: Array<string>;
  public postsMessage:string = '';
  public postsTitle:string = '';
  public postsName:string = '';
  public myDate:string = '';
  public postsEstimate:any = '';

  constructor(public navCtrl: NavController, public db:Database) {
    this.db.connect();
    this.db.collection('chats').order('created','descending').watch().subscribe( (chats) => {
      console.dir(chats);
      this.chats = chats;
    }, (error) => {
      console.error(error);
    });

    this.db.connect();
    this.db.collection('posts').order('created','descending').watch().subscribe( (posts) => {
      console.dir(posts);
      this.posts = posts;
    }, (error) => {
      console.error(error);
    });


  }

  sendMessage() {
    this.db.collection('chats').store({text:this.message, created:Date.now()});
  }


}
