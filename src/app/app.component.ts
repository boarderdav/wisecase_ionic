import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events, MenuController } from 'ionic-angular';

// import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { StatusBar, Splashscreen } from 'ionic-native';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import { Facebook, NativeStorage } from 'ionic-native';


import { TabsPage } from '../pages/tabs/tabs';

//add pages to show up in toggle menu here

import { PostPage } from '../pages/post/post';
import { SettingsPage } from '../pages/settings/settings';
// import { SettingsTPage } from '../pages/settings-t/settings-t';
import { ContactPage } from '../pages/contact/contact';
import { EstimatePage } from '../pages/estimate/estimate';
import { InvoicesPage } from '../pages/invoices/invoices';
import { HomePage } from '../pages/home/home';

import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

import { UserData } from '../providers/user-data';
import { Storage } from '@ionic/storage';



export interface PageInterface {
  title: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabComponent?: any;
}


@Component({
  selector: 'app-root',
  templateUrl: 'app.html',
  providers: [SplashScreen]
})




// export class MyApp {
//   @ViewChild(Nav) nav: Nav;
//   // rootPage = TabsPage;
//   rootPage = SettingsTPage;
//   //rootPage: any = SettingsPage;
//   postPage = PostPage;
//   settingsPage = SettingsPage

//   pages: Array<{title: string, component: any}>;

//   constructor(public platform: Platform) {
//     this.initializeApp();

//   // used for an example of ngFor and navigation
//     this.pages = [
//       { title: 'Dashboard', component: TabsPage },
//       { title: 'Estimate', component: EstimatePage },
//       { title: 'Invoices', component: InvoicesPage },
//       { title: 'Clients', component: ContactPage },
//       { title: 'Profile', component: ContactPage },

//       { title: 'Home', component: TabsPage },
//       { title: 'Settings', component: SettingsPage },
//       { title: 'Privacy', component: PostPage },
//       { title: 'Sign out', component: PostPage }
//     ];

//   }

//   initializeApp() {
//     this.platform.ready().then(() => {
//       // Okay, so the platform is ready and our plugins are available.
//       // Here you can do any higher level native things you might need.
//       // StatusBar.styleLightContent();
//       // Splashscreen.hide();
//     });
//   }

//   openPage(page) {
//     // Reset the content nav to have just this page
//     // we wouldn't want the back button to show in this scenario
//     this.nav.setRoot(page.component);
//   }

// }



export class MyApp {
  // the root nav is a child of the root app component
  // @ViewChild(Nav) gets a reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  // List of pages that can be navigated to from the left menu
  // the left menu only works after login
  // the login page disables the left menu
appPages: PageInterface[] = [
    { title: 'Dashboard', component: TabsPage, tabComponent: HomePage, icon: 'create' },
    { title: 'Estimate', component: EstimatePage, icon: 'clipboard' },
    { title: 'Create Estimate', component: PostPage, icon: 'text' },
    { title: 'Invoices', component: InvoicesPage, icon: 'contact' },
    { title: 'Contacts', component: ContactPage, icon: 'contacts' },
    { title: 'Settings', component: SettingsPage, icon: 'map' }

  ];
  loggedInPages: PageInterface[] = [
    { title: 'Account', component: AccountPage, icon: 'person' },
    { title: 'Logout', component: TabsPage, icon: 'log-out', logsOut: true }
  ];
  loggedOutPages: PageInterface[] = [
    { title: 'Login', component: LoginPage, icon: 'log-in' },
    { title: 'Signup', component: SignupPage, icon: 'person-add' }
  ];
  rootPage: any;

  constructor(
    public events: Events,
    public userData: UserData,
    public menu: MenuController,
    public platform: Platform,
    // public mapData: MapData,
    public storage: Storage,
    public splashScreen: SplashScreen
  ) 


  {

    // mapData.load();

    this.userData.hasLoggedIn().then((hasLoggedIn) => {
      this.enableMenu(hasLoggedIn === true);
      if(hasLoggedIn){
        this.rootPage = TabsPage;
      }
      else{
        this.rootPage = LoginPage;
      }
    });

    this.platformReady();

    this.listenToLoginEvents();

  }

  openPage(page: PageInterface) {
    // the nav component was found using @ViewChild(Nav)
    // reset the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario
    if (page.index) {
      this.nav.setRoot(page.component, { tabIndex: page.index });
    } else {
      this.nav.setRoot(page.component).catch(() => {
        console.log("Didn't set nav root");
      });
    }

    if (page.logsOut === true) {
      // Give the menu time to close before changing to logged out
      setTimeout(() => {
        this.userData.logout();
        this.nav.setRoot(LoginPage);
      }, 100);
    }
  }

  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.enableMenu(true);
      this.nav.setRoot(TabsPage);
    });

    this.events.subscribe('user:signup', () => {
      this.enableMenu(true);
      this.nav.setRoot(TabsPage);
    });

    this.events.subscribe('user:logout', () => {
      this.enableMenu(false);
    });
  }

  enableMenu(loggedIn: boolean) {
    this.menu.enable(loggedIn, 'loggedInMenu');
    this.menu.enable(!loggedIn, 'loggedOutMenu');
  }

  platformReady() {
    // Call any initial plugins when ready
    this.platform.ready().then(() => {
      this.splashScreen.hide();
    });

    /*this.platform.registerBackButtonAction(() => {
        if(this.getActivePage() == 'TabsPage'){
          this.platform.exitApp();
        }
        else{
          event.preventDefault();
        }

      });*/
  }

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNav();

    // Tabs are a special case because they have their own navigation
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().component === page.component) {
      return 'primary';
    }
    return;
  }

  getActivePage() {
    if(this.nav.getActive())
      return this.nav.getActive().name;
    else
      return '';
  }
}




export class AppComponent {
  items: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('/items');
  }
}
