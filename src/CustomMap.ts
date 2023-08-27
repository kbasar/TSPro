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

}