import { PlaceService } from './../../services/place.service';
import { Place } from './../../models/place.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {
  place: Place;
  index: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private placeService: PlaceService) {
    console.log(navParams.get("place"))
    this.place = navParams.get("place");
    this.index = navParams.get("index");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacePage');
  }

  onDelete(index){
    this.placeService.deletePlace(index);
    this.navCtrl.pop();
  }

}
