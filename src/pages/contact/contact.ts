import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';

// import { Database } from '@ionic/cloud-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { PostPage } from '../post/post';



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
  songs: FirebaseListObservable<any>;

  message: string;
  year: string;
  uid:string;
  interlocutor:string;
  chats:FirebaseListObservable<any>;
  // @ViewChild(Content) content: Content;

  // items: FirebaseObjectObservable<any>;

  constructor(public navCtrl: NavController, 
    public alertCtrl: AlertController, 
    public actionSheetCtrl: ActionSheetController, 
    public modalCtrl: ModalController,
    db: AngularFireDatabase) {
    this.songs = db.list('/songs');
    this.items = db.list('/lists');
    this.chats = db.list('/chats');


  }

sendMessage() {
      if(this.message) {
          let chat = {
              // from: this.uid,
              // message: this.message,
              type: this.message,
              year: this.year
          };
          this.chats.push(chat);
          this.message = "";
      }
  };


  addSong(){
  let prompt = this.alertCtrl.create({
    title: 'Song Name',
    message: "Enter a name for this new song you're so keen on adding",
    inputs: [
      {
        name: 'title',
        placeholder: 'Title'
      },
      {
        name: 'songArtist',
        placeholder: 'Artist'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {
          this.songs.push({
            title: data.title,
            songArtist: data.songArtist
          });
        }
      }
    ]
  });
  prompt.present();
}

  presentContactModal() {
    let contactModal = this.modalCtrl.create(PostPage);
    contactModal.present();
  }


  addSong1(){
  let prompt = this.alertCtrl.create({
    title: 'Song Name',
    message: "Enter a name for this new song you're so keen on adding",
    inputs: [
      {
        name: 'title',
        placeholder: 'Title'
      },
      {
        name: 'songArtist',
        placeholder: 'Artist'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {
          this.songs.push({
            title: data.title,
            songArtist: data.songArtist
          });
        }
      }
    ]
  });
  prompt.present();
}

showOptions(songId, songTitle, songArtist) {
  let actionSheet = this.actionSheetCtrl.create({
    title: 'What do you want to do?',
    buttons: [
      {
        text: 'Delete Song',
        role: 'destructive',
        handler: () => {
          this.removeSong(songId);
        }
      },{
        text: 'Update title',
        handler: () => {
          this.updateSong(songId, songTitle, songArtist);
        }
      },{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  actionSheet.present();
}

removeSong(songId: string){
  this.songs.remove(songId);
}

updateSong(songId, songTitle, songArtist){
  let prompt = this.alertCtrl.create({
    title: 'Song Name',
    message: "Update the name for this song",
    inputs: [
      {
        name: 'title',
        placeholder: 'Title',
        value: songTitle
      },
      {
        name: 'songArtist',
        placeholder: 'Artist',
        value: songArtist
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {
          this.songs.update(songId, {
            title: data.title,
            songArtist: data.songArtist
          });
        }
      }
    ]
  });
  prompt.present();
}


}
