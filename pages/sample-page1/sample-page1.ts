import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the SamplePage1 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sample-page1',
  templateUrl: 'sample-page1.html'
})
export class SamplePage1Page {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SamplePage1Page Page');
  }

}
