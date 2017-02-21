import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Database } from '@ionic/cloud-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPage {
  public chats: Array<string>;

  constructor(public navCtrl: NavController, public db: Database) {
    this.db.connect();
    this.db.collection('chats').watch().subscribe( (chats) => {
      this.chats = chats;
    }, (error) => {
      console.error(error);
    });
  }

  sendMessage(message: string) {
    this.db.collection('chats').store({text: message, time: Date.now()});
  }

}
