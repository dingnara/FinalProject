import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  departments = [
    { id: 1, name: 'Tnformation Technology'},
    { id: 2, name: 'Accounting'},
    { id: 3, name: 'Mechanical'},
    { id: 4, name: 'Food Technology'},
    { id: 5, name: 'Electrical Pawer'},
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



}
