import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';
// import { Database } from '@ionic/cloud-angular';
import { PostPage } from '../post/post';
import { SettingsTPage } from '../settings-t/settings-t';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';


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
  posts: FirebaseListObservable<any[]>;

  postPage = PostPage;
  settingsTPage = SettingsTPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController, db: AngularFireDatabase) {

    this.posts = db.list('/posts');
  }

  addEstimate(){
  let prompt = this.alertCtrl.create({
    title: 'Create Estimate',
    message: "Create a new estimate here.",
    inputs: [
      {
        name: 'clientName',
        placeholder: 'Client Name'
      },
      {
        name: 'jobType',
        placeholder: 'Type of Job'
      },
      {
        name: 'estimateDate',
        placeholder: 'Date'
      },
      {
        name: 'estimatePrice',
        placeholder: 'Estimate'
      },
      {
        name: 'longDescription',
        placeholder: 'Job Description'
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
          this.posts.push({
            clientName: data.clientName,
            jobType: data.jobType,
            estimateDate: data.estimateDate,
            estimatePrice: data.estimatePrice,
            longDescription: data.longDescription
          });
        }
      }
    ]
  });
  prompt.present();
}

showOptions(postId, clientName, jobType, estimateDate, estimatePrice, longDescription) {
  let actionSheet = this.actionSheetCtrl.create({
    title: 'What do you want to do?',
    buttons: [
      {
        text: 'Delete Estimate',
        role: 'destructive',
        handler: () => {
          this.removePost(postId);
        }
      },{
        text: 'Update Estimate Details',
        handler: () => {
          this.updatePost(postId, clientName, jobType, estimateDate, estimatePrice, longDescription);
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

removePost(postId: string){
  this.posts.remove(postId);
}

updatePost(postId, clientName, jobType, estimateDate, estimatePrice, longDescription){
  let prompt = this.alertCtrl.create({
    title: 'Post Name',
    message: "Update the Estimate.",
    inputs: [
      {
        name: 'clientName',
        placeholder: 'Client Name',
        value: clientName
      },
      {
        name: 'jobType',
        placeholder: 'Type of Job',
        value: jobType
      },
      {
        name: 'estimateDate',
        placeholder: 'Estimate Date',
        value: estimateDate
      },
      {
        name: 'estimatePrice',
        placeholder: 'Estimate',
        value: estimatePrice
      },
      {
        name: 'longDescription',
        placeholder: 'Job Description',
        value: longDescription
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
          this.posts.update(postId, {
            clientName: data.clientName,
            jobType: data.jobType,
            estimateDate: data.estimateDate,
            estimatePrice: data.estimatePrice,
            longDescription: data.longDescription
          });
        }
      }
    ]
  });
  prompt.present();
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstimatePage');
  }

}


