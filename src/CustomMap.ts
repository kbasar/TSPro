import { User } from "./User";
import { Company } from "./Company";

export class CustomMap {

    private googleMap:google.maps.Map;

    // Set default properties
    private mapOptions = {
        zoom: 8,
        center: { lat: -34.397, lng: 150.644 },
      };
      
    constructor(divId:string) {
        
        this.googleMap = new google.maps.Map(
            document.getElementById("{divId}") as HTMLElement),this.mapOptions;

    }

    addUserMarker(user:User): void {
        new google.maps.Marker({
            map: this.googleMap,
            position:{
                lat:user.location.lat,
                lng:user.location.lng
            }
        }) 

    }

    addCompanyMarker(company:Company):void {

    }
}