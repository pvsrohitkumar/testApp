import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the TestApp page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-test-app',
  templateUrl: 'test-app.html'
})
export class TestAppPage {

  constructor(public navCtrl: NavController) {}
  
  ionViewDidLoad(){
    alert('ionViewDidLoad');
  }
  ionViewWillEnter(){
    alert('ionViewWillEnter');
  }
  ionViewDidEnter(){
    alert('ionViewDidEnter');
  }
  ionViewWillLeave(){
    alert('ionViewWillLeave');
  }
  ionViewDidLeave	(){
    alert('ionViewDidLeave');
  }
  ionViewWillUnload(){
    alert('ionViewWillUnload');
  }
  ionViewCanEnter() {
    alert('ionViewCanEnter');
    console.log('Hello TestAppPage Page');
  }

  private goToHomePage() {
    this.navCtrl.pop();
  }

}
