import { AddPlacePage } from './../add-place/add-place';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  goToAddPlace() {
    console.log("in the method");
    this.navCtrl.push(AddPlacePage);
  }

}
