import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITrip } from 'src/app/models/trip';
import { TripService } from 'src/app/services/trips.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit, OnDestroy {

  errorMessage: string = '';
  sub!: Subscription;

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredTrips = this.performFilter(value);
  }

  constructor(private tripService: TripService) { }

  scheduledTrips: ITrip[] = [];
  filteredTrips: ITrip[] = [];

  ngOnInit(): void {
    this.sub = this.tripService.getTrips().subscribe({
      next: scheduledTrips => {
        this.scheduledTrips = scheduledTrips;
        this.filteredTrips = this.scheduledTrips;
      },
      error: (err: string) => this.errorMessage = err
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  performFilter(filterBy: string): ITrip[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.scheduledTrips.filter((trip: ITrip) =>
      trip.fromStation.name.toLocaleLowerCase().includes(filterBy));
  }

}
