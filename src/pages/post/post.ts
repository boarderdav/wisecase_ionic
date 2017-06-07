import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, NavParams, ViewController } from 'ionic-angular';
// import { Database } from '@ionic/cloud-angular';
import { EstimatePage } from '../estimate/estimate';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
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

  newPost: any;
  data: any;
  theItems: any;

  // typeJob: FirebaseObjectObservable<any[]>;
  // postDate: FirebaseObjectObservable<any[]>; 
  // postPrice: FirebaseObjectObservable<any[]>; 
  // postDescription: FirebaseObjectObservable<any[]>; 


  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController, 
    db: AngularFireDatabase, 
    public userData: UserData) {

  this.newPost = db.object('/newPosts');

  }

 // Working Save, Update, & Delete
  // save(newName: string) {
  //   this.newPost.set({ name: newName });
  // }

  // saveItem(clientName: string, typeJob: string, postDate: any, postPrice: number, postDescription: string) {
  // saveItem(clientName, typeJob, postDate, postPrice, postDescription) {
  saveItem(form: NgForm) {

    this.newPost = true;
    if (form.valid) {
      this.theItems.push({ 
        name: this.data.clientName,
        job: this.data.typeJob
      })
    }


    // this.newPost.set({ 
    //   name: clientName,
    //   job: typeJob,
    //   postDate: postDate,
    //   price: postPrice,
    //   description: postDescription
    // }).then( newPosting => {
    //   this.navCtrl.pop();
    // }, error =>{
    //   console.log(error);
    // });

    
    //   clientName: clientName,
    //   typeJob: this.typeJob,
    //   postDate: this.postDate,
    //   postPrice: this.postPrice,
    //   postDescription: this.postDescription 
    // });
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


