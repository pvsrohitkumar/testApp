import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ListViewPage } from '../list-view/list-view';
import { TestAppPage } from '../test-app/test-app';

//import { TestAppPage } from '../test-app/test-app'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // private sampleData = [
  //   {
  //     'firstName': ' Rohit',
  //     'lastName': 'Sitaram',
  //     'age': 23,
  //     'addr': 'A37',
  //   },
  //   {
  //     'firstName': 'Siva',
  //     'lastName' : 'Rama',
  //     'age': 23,
  //     'addr': 'C9'
  //   },
  //   {
  //     'firstName': 'Nagi',
  //     'lastName' : 'Reddy',
  //     'age': 25,
  //     'addr': 'C8'
  //   }
  // ];
  constructor(public navCtrl: NavController) {

  }
  private moveToTestApp() {
  //  this.navCtrl.push(TestAppPage, { 'data' : this.sampleData});
      this.navCtrl.push(TestAppPage);
  }

}
