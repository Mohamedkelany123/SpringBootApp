import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //TRIP
  createTrip(){
    location.href = "/app-create-trip"
  }
  viewTrips(){
    location.href = "/app-trips"
  }
  updateTrip(){
    location.href = "/app-update-trip"
  }
  deleteTrip() {
    location.href = "/app-delete-trip"
  }

  //STATION
  createStation(){
    location.href = "/app-create-station"
  }
  viewStations(){
    location.href = "/app-stations"
  }
  updateStation(){
    location.href = "/app-update-station"
  }
  deleteStation() {
    location.href = "/app-delete-station"
  }

}

