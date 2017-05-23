import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
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


// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


// // AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyAm-Rxaiw5WICb0Z-O-Kbdr7NXx2Zu5aBk",
  authDomain: "wisecase-bcd14.firebaseapp.com",
  databaseURL: "https://wisecase-bcd14.firebaseio.com",
  projectId: "wisecase-bcd14",
  storageBucket: "wisecase-bcd14.appspot.com",
  messagingSenderId: "557198014694"
};



const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '3564f10c'
  },
  'auth': {
    'facebook': {
      'scope': ['permission1', 'permission2']
    }
  }
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
    SettingsTPage
  ],

  imports: [
    IonicModule.forRoot(MyApp), BrowserModule,
    CloudModule.forRoot(cloudSettings),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
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
    SettingsTPage
  ],

  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})

export class AppModule {}


