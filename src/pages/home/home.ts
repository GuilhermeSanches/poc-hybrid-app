import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ListPage } from '../list/list';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openSignup() {
    this.navCtrl.push(SignupPage)
  }

  openListPage() {
    this.navCtrl.push(ListPage);
  }

}
