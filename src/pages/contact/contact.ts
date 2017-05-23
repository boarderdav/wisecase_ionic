import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { Database } from '@ionic/cloud-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})


export class ContactPage {
  // public chats: Array<string>;
  // public message:string = '';

  // public posts: Array<string>;
  // public postsMessage:string = '';
  // public postsTitle:string = '';
  // public postsName:string = '';
  // public myDate:string = '';
  // public postsEstimate:any = '';

  // Firebase Setup Lists
  items: FirebaseListObservable<any[]>;
  // items: FirebaseObjectObservable<any>;

  constructor(public navCtrl: NavController, afDB: AngularFireDatabase) {

    this.items = afDB.list('/lists');

  }
}
