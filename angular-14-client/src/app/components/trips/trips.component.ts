import { Component, OnInit } from '@angular/core';
import { ITrip } from './trip';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit{

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredTrips = this.performFilter(value);
  }

  scheduledTrips: ITrip[] = [
    {
      "tripId": 1,
      "startTime": new Date(2018, 0O5, 0O5, 17, 23, 42),
      "endTime": new Date(2018, 0O5, 0O5, 17, 23, 42),
      "fromStation": "alex",
      "toStation": "cairo",
    },
    {
      "tripId": 2,
      "startTime": new Date(2018, 0O5, 0O5, 17, 23, 42),
      "endTime": new Date(2022, 0O5, 0O5, 17, 23, 42, 11),
      "fromStation": "gharbya",
      "toStation": "sharkya",
    },
    {
      "tripId": 1,
      "startTime": new Date(2018, 0O5, 0O5, 17, 23, 42),
      "endTime": new Date(2018, 0O5, 0O5, 17, 23, 42),
      "fromStation": "alex",
      "toStation": "cairo",
    },
    {
      "tripId": 2,
      "startTime": new Date(2018, 0O5, 0O5, 17, 23, 42),
      "endTime": new Date(2022, 0O5, 0O5, 17, 23, 42, 11),
      "fromStation": "gharbya",
      "toStation": "sharkya",
    },
    {
      "tripId": 1,
      "startTime": new Date(2018, 0O5, 0O5, 17, 23, 42),
      "endTime": new Date(2018, 0O5, 0O5, 17, 23, 42),
      "fromStation": "alex",
      "toStation": "cairo",
    },
    {
      "tripId": 2,
      "startTime": new Date(2018, 0O5, 0O5, 17, 23, 42),
      "endTime": new Date(2022, 0O5, 0O5, 17, 23, 42, 11),
      "fromStation": "gharbya",
      "toStation": "sharkya",
    },
    {
      "tripId": 1,
      "startTime": new Date(2018, 0O5, 0O5, 17, 23, 42),
      "endTime": new Date(2018, 0O5, 0O5, 17, 23, 42),
      "fromStation": "alex",
      "toStation": "cairo",
    },
    {
      "tripId": 2,
      "startTime": new Date(2018, 0O5, 0O5, 17, 23, 42),
      "endTime": new Date(2022, 0O5, 0O5, 17, 23, 42, 11),
      "fromStation": "gharbya",
      "toStation": "sharkya",
    },
    {
      "tripId": 1,
      "startTime": new Date(2018, 0O5, 0O5, 17, 23, 42),
      "endTime": new Date(2018, 0O5, 0O5, 17, 23, 42),
      "fromStation": "alex",
      "toStation": "cairo",
    },
    {
      "tripId": 2,
      "startTime": new Date(2018, 0O5, 0O5, 17, 23, 42),
      "endTime": new Date(2022, 0O5, 0O5, 17, 23, 42, 11),
      "fromStation": "gharbya",
      "toStation": "sharkya",
    },
  ];

  filteredTrips: ITrip[] = this.scheduledTrips;

  performFilter(filterBy: string): ITrip[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.scheduledTrips.filter((trip: ITrip) =>
    trip.fromStation.toLocaleLowerCase().includes(filterBy));
  }

  deleteItem() {

  }

  ngOnInit(): void {
      
  }

}
