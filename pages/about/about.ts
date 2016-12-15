import { Component } from '@angular/core';

import { NavController, ModalController,AlertController,LoadingController } from 'ionic-angular';

import { ModalPopupPage } from '../modal-popup/modal-popup';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public press: number = 0;
  public pan: number = 0;
  public swipe: number = 0;
  public tap: number = 0;
  constructor(public navCtrl: NavController, public modalCntrl : ModalController, public alertCntrl : AlertController,
              public loadingCntrl : LoadingController) {

  } 

  private displayPopup() {
    let modal = this.modalCntrl.create(ModalPopupPage);
    modal.present();
  }

  private showConfirmation() {
    let alert = this.alertCntrl.create({
        title : 'Do you like playing cricket ?',
        message : 'Answer to the Question properly....',
        buttons : [
          {
            text : 'Yes',
            handler : () => {
              console.log('I like playing cricket');
            }
          },
          {
            text : 'No',
            handler : () =>{
              console.log('I don\'t play cricket ');
            }
          }
        ]
    });
    alert.present();
  }

   private pressEvent(e) {
    this.press++
  }
  private swipeEvent(e) {
    this.swipe++
  }
  private tapEvent(e) {
    this.tap++
  }

  private showLoader() {
    let loader = this.loadingCntrl.create({
      content : 'Please wait ...',
      duration : 2000
    });
    loader.present();
  }



}
