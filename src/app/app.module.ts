
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PlacePage } from './../pages/place/place';
import { SetLocationPage } from './../pages/set-location/set-location';
import { AddPlacePage } from './../pages/add-place/add-place';
import { PlaceService } from './../services/place.service';

import { AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SetLocationPage,
    PlacePage,
    AddPlacePage
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAUDVqcEjgXZUc7DNhOzS9Pp2NqS7qwkok'
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SetLocationPage,
    PlacePage,
    AddPlacePage
  ],
  providers: [
    StatusBar,
    Geolocation,
    Camera,
    PlaceService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
