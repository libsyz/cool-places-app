import { PlaceService } from './../../services/place.service';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Form, ModalController, Modal, LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { SetLocationPage } from './../set-location/set-location';
import { Location } from './../../models/location.model';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';



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
              private geoLocation: Geolocation,
              private loadingCtrl: LoadingController,
              private camera: Camera,
              private placeService: PlaceService) {
  }

  title: string;
  description: string;
  location: Location = { lat: 35.8894, lng: -5.3213 };
  locationIsSet: boolean = false;
  cameraIsActive: boolean = false;
  imageIsActive: boolean = false;
  src: any;

    camOptions: CameraOptions = {
    quality: 100,
    correctOrientation: true,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPlacePage');
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.placeService.addPlace(form.value.title, form.value.description, this.location, this.src);
    this.resetValues(form);
    this.navCtrl.pop();
  }

  resetValues(form){
    form.reset;
    this.location = { lat: 35.8894, lng: -5.3213 };
    this.src = '';
    this.locationIsSet = false;
    this.cameraIsActive = false;
    this.imageIsActive = false;
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
    const loading = this.loadingCtrl.create({
      content: "Fetching your location..."
    })
    loading.present()
    this.geoLocation.getCurrentPosition()
    .then(location=> {
      console.log(location);
      this.location.lat = location.coords.latitude;
      this.location.lng = location.coords.longitude;

      this.locationIsSet = true;
      loading.dismiss();
    })
    .catch(error=> {
      loading.dismiss();
      console.log(error);
    })
  }
 

  onShowCamera() {
    this.cameraIsActive = true;
    console.log(navigator.mediaDevices)
    const video = document.querySelector('video');
    navigator.mediaDevices.getUserMedia({video: true})
    .then( stream => {
      video.srcObject = stream }
    )
    .catch( err => {
      console.log(err)
    })
  }

  onTakePicture() {
    
    const video = document.querySelector('video');
    const canvas = document.querySelector('canvas');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    this.cameraIsActive = false;
    
    this.src = canvas.toDataURL('image/webp');
    this.imageIsActive = true;
  }


}
