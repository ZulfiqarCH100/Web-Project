import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  constructor() {}

  center!: google.maps.LatLngLiteral;
  zoom = 12;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };
  currLat: any;
  currLon: any;

  currPosition!: google.maps.LatLngLiteral;

  ngOnInit() {
    if (!navigator.geolocation) {
      console.log('Location not found');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      this.currLat = position.coords.latitude;
      this.currLon = position.coords.longitude;
      this.currPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }
}
