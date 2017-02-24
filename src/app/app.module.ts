import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { EstimatePage } from '../pages/estimate/estimate';
import { PostPage } from '../pages/post/post';
import { InvoicesPage } from '../pages/invoices/invoices';
import { SettingsPage } from '../pages/settings/settings';
import { SettingsTPage } from '../pages/settings-t/settings-t';



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
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
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


