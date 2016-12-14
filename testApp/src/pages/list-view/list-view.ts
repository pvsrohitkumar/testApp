import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ListView page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list-view',
  templateUrl: 'list-view.html'
})
export class ListViewPage {
   private sampleData = [
    {
      'firstName': ' Rohit',
      'lastName': 'Sitaram',
      'age': 23,
      'addr': 'A37',
    },
    {
      'firstName': 'Siva',
      'lastName' : 'Rama',
      'age': 23,
      'addr': 'C9'
    },
    {
      'firstName': 'Nagi',
      'lastName' : 'Reddy',
      'age': 25,
      'addr': 'C8'
    }, {
      'firstName': ' Rohit',
      'lastName': 'Sitaram',
      'age': 23,
      'addr': 'A37',
    },
    {
      'firstName': 'Siva',
      'lastName' : 'Rama',
      'age': 23,
      'addr': 'C9'
    },
    {
      'firstName': 'Nagi',
      'lastName' : 'Reddy',
      'age': 25,
      'addr': 'C8'
    }
  ];
  private contactsData : any;
 // private sampleData : any;
  constructor(public navCtrl: NavController, public navparams : NavParams) {
    let data = navparams.get('data');
    if(data == undefined){
      this.contactsData = this.sampleData;
    }else{
      this.contactsData = data;
    }
    //this.sampleData = navparams.get('data');
    //console.log( this.sampleData);
  }

  ionViewDidLoad() {
    
   // console.log('Hello ListViewPage Page');
  }

}
