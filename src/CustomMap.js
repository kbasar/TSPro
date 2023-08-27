"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomMap = void 0;
class CustomMap {
    constructor(divId) {
        // Set default properties
        this.mapOptions = {
            zoom: 8,
            center: { lat: -34.397, lng: 150.644 },
        };
        this.googleMap = new google.maps.Map(document.getElementById("{divId}")), this.mapOptions;
    }
}
exports.CustomMap = CustomMap;
