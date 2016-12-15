import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

/*
  Generated class for the ModalPopup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal-popup',
  templateUrl: 'modal-popup.html'
})
export class ModalPopupPage {

  constructor(public navCtrl: NavController, public viewCntrl : ViewController) {}

  ionViewDidLoad() {
    console.log('Hello ModalPopupPage Page');
  }

  private close() {
    this.viewCntrl.dismiss();
  }

}
