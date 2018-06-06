import { Place } from './../models/place.model';


export class PlaceService {
    private placesArray: Place[] = [];


    addPlace(title: string, description: string, location: any, imgUrl: string) {
        const place = new Place(title, description, location, imgUrl);
        this.placesArray.push(place);
    }

    fetchPlaces() {
        return this.placesArray.slice();
    }

    deletePlace(index) {
        this.placesArray.splice(index, 1);
    }
}