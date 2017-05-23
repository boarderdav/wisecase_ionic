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

//   .state('chat', {
//   url: '/chat',
//   templateUrl: 'pages/chat.html',
//   controller: 'ChatCtrl'
// })




//   .factory('Messages', function($firebaseArray) {
//   var messagesRef = new Firebase("https://wisecase-bcd14.firebaseio.com/");
//   return $firebaseArray(messagesRef);
// })


// .controller('ChatCtrl', function($scope, $state, $ionicPopup, Messages) {
 
//   $scope.messages = Messages;
 
//   $scope.addMessage = function() {
 
//    $ionicPopup.prompt({
//      title: 'Need to get something off your chest?',
//      template: 'Let everybody know!'
//    }).then(function(res) {
//       $scope.messages.$add({
//         "message": res
//       });
//    });
//   };
 
//   $scope.logout = function() {
//     var ref = new Firebase("https://wisecase-bcd14.firebaseio.com/");
//     ref.unauth();
//     $state.go('login');
//   };
 
// })



}
