import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-about',
 templateUrl: 'about.html'
})
export class AboutPage {
	rootPage = HomePage;

  constructor(public navCtrl: NavController) {  }


}


