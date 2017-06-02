import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

//adding ionic storagemodule
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
// import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { BrowserModule } from '@angular/platform-browser';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { EstimatePage } from '../pages/estimate/estimate';
import { PostPage } from '../pages/post/post';
import { InvoicesPage } from '../pages/invoices/invoices';
import { SettingsPage } from '../pages/settings/settings';
import { SettingsTPage } from '../pages/settings-t/settings-t';

import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';


// providers section new
import { UserData } from '../providers/user-data';


// Import the AF2 Module
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireModule } from 'angularfire2';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

// import { AngularFireAuthModule } from 'angularfire2/auth';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2/auth';
// import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
// import { AngularFireAuthModule } from 'angularfire2/auth';
// import { AngularFireAuthModule, AuthProviders, AuthMethods } from 'angularfire2/auth';
import { EmailComposer } from '@ionic-native/email-composer';
import { SMS } from '@ionic-native/sms';

// import { AngularFireModule, AngularFireApp } from '@angularfire/app';
// import { AngularFireDatabaseModule, AngularFireDatabase } from '@angularfire/database';
// import { AngularFireAuthModule, AngularFireAuth } from '@angularfire/auth';



// // AF2 Settings
export const myFirebaseConfig = {
  apiKey: "AIzaSyAm-Rxaiw5WICb0Z-O-Kbdr7NXx2Zu5aBk",
  authDomain: "wisecase-bcd14.firebaseapp.com",
  databaseURL: "https://wisecase-bcd14.firebaseio.com",
  projectId: "wisecase-bcd14",
  storageBucket: "wisecase-bcd14.appspot.com",
  messagingSenderId: "557198014694"
};

// new export information
export const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EstimatePage,
    PostPage,
    InvoicesPage,
    SettingsPage,
    SettingsTPage,
    LoginPage,
    SignupPage,
    AccountPage
  ],

  imports: [
    IonicModule.forRoot(MyApp), BrowserModule,
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig)
    // AngularFireDatabaseModule,
    // AngularFireAuthModule

  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EstimatePage,
    PostPage,
    InvoicesPage,
    SettingsPage,
    SettingsTPage,
    LoginPage,
    SignupPage,
    AccountPage
  ],

  providers: [
  EmailComposer,
  SMS,
  UserData,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]

})

export class AppModule {}


