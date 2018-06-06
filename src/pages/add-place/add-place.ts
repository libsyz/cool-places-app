import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Form, ModalController, Modal } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { SetLocationPage } from './../set-location/set-location';
import { Location } from './../../models/location.model';
import { Geolocation } from '@ionic-native/geolocation';





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

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private modalCtrl: ModalController,
              private geoLocation: Geolocation) {
  }

  title: string;
  description: string;
  location: Location = { lat: 35.8894, lng: -5.3213 };
  locationIsSet: boolean = false;

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPlacePage');
  }

onSubmit(form: NgForm) {
    console.log(form);
  }

  onOpenMap(){
    const modal = this.modalCtrl.create(SetLocationPage, {location: this.location,
                                                          isSet: this.locationIsSet})
    modal.present();
    modal.onDidDismiss(
      data => {
        console.log(data);
        if (data) {
          this.location = data.marker;
          this.locationIsSet = true;
        }
      }
    )
  }

  onLocate() {
    this.geoLocation.getCurrentPosition()
    .then(location=> {
      console.log(location);
    })
    .catch(error=> {
      console.log(error);
    })
  }
 


}
