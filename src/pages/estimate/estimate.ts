import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';
// import { Database } from '@ionic/cloud-angular';
import { PostPage } from '../post/post';
import { SettingsTPage } from '../settings-t/settings-t';
import { EmailComposer } from '@ionic-native/email-composer';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import { SMS } from '@ionic-native/sms';
import { ModalController, ViewController } from 'ionic-angular';


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
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController, db: AngularFireDatabase, public emailComposer: EmailComposer, private sms: SMS) {

    this.posts = db.list('/posts');
  }

  presentContactModal() {
    let contactModal = this.modalCtrl.create(PostPage);
    contactModal.present();
  }


  sendSMS(){
    var options={
      replaceLineBreaks: false,
      android: {
        intent: 'INTENT'

      }
    }
    this.sms.send('7575365000', 'Dear David Jenkins. We are sending you a quote for the Software job for a price of $5,200 on 5/30/17. Please contact us if you have any further questions.', options)
    .then(()=>{
      alert("success");
    },()=>{
      alert("failed");
    });
  }




  sendSMSwithVariables(postId, clientNameTop, clientPhoneNumberTop, jobTypeTop, estimateDateTop, estimatePriceTop, longDescriptionTop){

    var options={
      replaceLineBreaks: false,
      android: {
        intent: 'INTENT'

      }
    }
 
    this.sms.send(clientPhoneNumberTop, 'Dear ' + clientNameTop + '. We are sending you a quote for the ' + jobTypeTop + ' job for a price of $' + estimatePriceTop + ' on ' + estimateDateTop + '. Please contact us if you have any further questions.', options)
  
    .then(()=>{
      alert("success" + clientPhoneNumberTop);
    },()=>{
      alert("failed");
    });
  }

  sendSMSwithVariablesTest(postId, clientNameTop, clientPhoneNumberTop, jobTypeTop, estimateDateTop, estimatePriceTop, longDescriptionTop){

    // var options={
    //   replaceLineBreaks: false,
    //   android: {
    //     intent: 'INTENT'

    //   }
    // }

    let actionSheet = this.actionSheetCtrl.create({
    title: 'Want to send a text message?',
    buttons: [
      {
        text: 'Send Text Message to ' + clientNameTop,
        handler: () => {

        var options={
         replaceLineBreaks: false,
          android: {
            intent: 'INTENT'

          }
        }
 
        this.sms.send(clientPhoneNumberTop, 'Dear ' + clientNameTop + '. We are sending you a quote for the ' + jobTypeTop + ' job for a price of $' + estimatePriceTop + ' on ' + estimateDateTop + '. Please contact us if you have any further questions.', options)
      
        .then(()=>{
          alert("successfully sent to " + clientPhoneNumberTop);
        },()=>{
          alert("failed");
        });
      

        }
      },

      {
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


  // handler: () => {
  //   this.sms.send(clientPhoneNumberTop, 'Dear ' + clientNameTop + '. We are sending you a quote for the ' + jobTypeTop + ' job for a price of $' + estimatePriceTop + ' on ' + estimateDateTop + '. Please contact us if you have any further questions.', options)
  // }
  //   .then(()=>{
  //     alert("success" + clientPhoneNumberTop);
  //   },()=>{
  //     alert("failed");
  //   });
  // }



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
        name: 'clientPhoneNumber',
        placeholder: 'Client Phone Number',
        type: 'tel'
      },
      {
        name: 'jobType',
        placeholder: 'Type of Job'
      },
      {
        name: 'estimateDate',
        placeholder: 'Date',
        type: 'date'
      },
      {
        name: 'estimatePrice',
        placeholder: 'Estimate',
        type: 'number'
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
            clientPhoneNumber: data.clientPhoneNumber,
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

showOptions(postId, clientNameTop, clientPhoneNumberTop, jobTypeTop, estimateDateTop, estimatePriceTop, longDescriptionTop) {
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
          this.updatePost(postId, clientNameTop, clientPhoneNumberTop, jobTypeTop, estimateDateTop, estimatePriceTop, longDescriptionTop);
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

updatePost(postId, clientNameTop, clientPhoneNumberTop, jobTypeTop, estimateDateTop, estimatePriceTop, longDescriptionTop){
  let prompt = this.alertCtrl.create({
    title: 'Update Estimate',
    message: "Update the Estimate.",
    inputs: [
      {
        name: 'clientName',
        placeholder: 'Client Name',
        value: clientNameTop
      },
      {
        name: 'clientPhoneNumber',
        placeholder: 'Client Phone Number',
        value: clientPhoneNumberTop,
        type: 'tel'

      },
      {
        name: 'jobType',
        placeholder: 'Type of Job',
        value: jobTypeTop
      },
      {
        name: 'estimateDate',
        placeholder: 'Estimate Date',
        value: estimateDateTop,
        type: 'date'
      },
      {
        name: 'estimatePrice',
        placeholder: 'Estimate',
        value: estimatePriceTop,
        type:'number'
      },
      {
        name: 'longDescription',
        placeholder: 'Job Description',
        value: longDescriptionTop
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
            clientPhoneNumber: data.clientPhoneNumber,
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




sendEmail(){
this.emailComposer.isAvailable().then((available: boolean) =>{
 if(available) {
   //Now we know we can send
 }
});

// let email = {
//   to: 'max@mustermann.de',
//   cc: 'erika@mustermann.de',
//   bcc: ['john@doe.com', 'jane@doe.com'],
//   attachments: [
//     'file://img/logo.png',
//     'res://icon.png',
//     'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
//     'file://README.pdf'
//   ],
//   subject: 'Cordova Icons',
//   body: 'How are you? Nice greetings from Leipzig',
//   isHtml: true
// };

// Send a text message using default options
// this.emailComposer.open(email);

this.emailComposer.open({
  to: 'max@mustermann.de',
  cc: 'erika@mustermann.de',
  bcc: ['john@doe.com', 'jane@doe.com'],
  subject: 'Cordova Icons',
  body: 'How are you? Nice greetings from Leipzig',
  isHtml: true

});

}



  ionViewDidLoad() {
    console.log('ionViewDidLoad EstimatePage');
  }

}


