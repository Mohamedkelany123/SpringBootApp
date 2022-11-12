import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TripService } from 'src/app/services/trips.service';

@Component({
  selector: 'app-update-trip',
  templateUrl: './update-trip.component.html',
  styleUrls: ['./update-trip.component.css', '../../shared/crud-card.css']
})
export class UpdateTripComponent implements OnDestroy {

  sub!: Subscription;

  constructor(private tripService: TripService) { }

  updateTrip(): void {
    const idStringFromStation = (<HTMLInputElement>document.getElementById("fromStation")).value;
    const idStringToStation = (<HTMLInputElement>document.getElementById("toStation")).value;
    const idString = (<HTMLInputElement>document.getElementById("id")).value;
    
    const tripData = {
      startTime: (<HTMLInputElement>document.getElementById("startTime")).value,
      endTime: (<HTMLInputElement>document.getElementById("endTime")).value,
      toStation: {
        id: parseInt(idStringFromStation),
      },
      fromStation: {
        id: parseInt(idStringToStation),
      }
    }
    this.sub = this.tripService
      .updateTrip(parseInt(idString), tripData).subscribe({
        next: station => {
          alert('trip updated succefully');
          location.href = 'app-home';
        },
        error: (err: string) => {
          alert('something went wrong');
          this.errorMessage = err
        }
      });
  }

  errorMessage: string = '';

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
