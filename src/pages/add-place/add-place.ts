import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Form } from 'ionic-angular';
import { NgForm } from '@angular/forms';


/**
 * Generated class for the AddPlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  title: string;
  description: string;

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPlacePage');
  }

onSubmit(form: NgForm) {
    console.log(form);
  }



}
