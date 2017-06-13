import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, NavParams, ViewController } from 'ionic-angular';
// import { Database } from '@ionic/cloud-angular';
import { EstimatePage } from '../estimate/estimate';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { UserData } from '../../providers/user-data';



@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})

export class PostPage {
  // public posts: Array<string>;
  // public postsMessage:string = '';
  // public postsTitle:string = '';
  // public postsName:string = '';
  // public myDate:string = '';
  // public postsEstimate:any = '';
  tab2Root: any = EstimatePage;

  newposts: FirebaseListObservable<any[]>;

  newPost: any;
  data: any;
  theItems: any;
  submitted = false;
  message: any;
  // data: {name?: string, text?: string} = any;


  // typeJob: FirebaseObjectObservable<any[]>;
  // postDate: FirebaseObjectObservable<any[]>; 
  // postPrice: FirebaseObjectObservable<any[]>; 
  // postDescription: FirebaseObjectObservable<any[]>; 


  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController, 
    db: AngularFireDatabase, 
    public userData: UserData) {

  this.newPost = db.list('/newposts');
  this.message = '';

  }

  //  createPost() {
  //    this.newPost = db.collection('posts').store({
  // //    description:this.postsMessage, 
  // //    type:this.postsTitle, 
  // //    name:this.postsName, 
  // //    date:this.myDate, 
  // //    price:this.postsEstimate,
  // //    created:Date.now()
  // //   });
  // // }

 // Working Save, Update, & Delete
  // save(newName: string) {
  //   this.newPost.set({ name: newName });
  // }

  // saveItem(clientName: string, typeJob: string, postDate: any, postPrice: number, postDescription: string) {
  // saveItem(clientName, typeJob, postDate, postPrice, postDescription) {
 



  saveData(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.theItems.push(
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

        }
        )
      .then((val) => {
        this.message = 'Item Saved.';
      })
      .catch((err) => {
        console.log(err);
        this.message = 'Cannot Save The Item.';
      });
    }
  }


  saveItem(form: NgForm) {

    this.newPost = true;
    if (form.valid) {
      this.theItems.push({ 
        name: this.data.clientName,
        job: this.data.typeJob
      })
    }
  }

  newPosting(){
    this.navCtrl.push(EstimatePage)
  }

}




      // {
      //   text: 'Save',
      //   handler: data => {
      //     this.songs.push({
      //       title: data.title,
      //       songArtist: data.songArtist
      //     });
      //   }
      // }


  // update(newSize: string) {
  //   this.newPost.update({ size: newSize });
  // }
  // delete() {
  //   this.newPost.remove();
  // }
  	

    // this.db.connect();
    // this.db.collection('posts').order('created','descending').watch().subscribe( (posts) => {
    //   console.dir(posts);
    //   this.posts = posts;
    // }, (error) => {
    //   console.error(error);
    // });


  // createPost() {
  //   this.db.collection('posts').store({
  //   	description:this.postsMessage, 
  //   	type:this.postsTitle, 
  //   	name:this.postsName, 
  //   	date:this.myDate, 
  //   	price:this.postsEstimate,
  //   	created:Date.now()
  //   });
  // }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad PostPage');
  // }


