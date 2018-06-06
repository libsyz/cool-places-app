import { Place } from './../../models/place.model';
import { AddPlacePage } from './../add-place/add-place';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlaceService } from './../../services/place.service';
import { PlacePage } from './../place/place';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private placeService: PlaceService) {
  }

  places: Place[];

  goToAddPlace(place) {
    console.log("in the method");
    this.navCtrl.push(AddPlacePage);
  }

  ionViewWillEnter() {
    this.places = this.placeService.fetchPlaces();
    console.log(this.places);
  }

  onOpenPlace(place, index){
    this.navCtrl.push(PlacePage, {place: place, index: index})
  }

}
