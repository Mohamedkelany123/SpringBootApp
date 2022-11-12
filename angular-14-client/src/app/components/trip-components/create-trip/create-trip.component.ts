import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TripService } from 'src/app/services/trips.service';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css', '../../shared/crud-card.css']
})
export class CreateTripComponent implements OnDestroy {

  sub!: Subscription;

  constructor(private stationService: TripService) { }

  createTrip(): void {

    const idStringFromStation = (<HTMLInputElement>document.getElementById("fromStation")).value;
    const idStringToStation = (<HTMLInputElement>document.getElementById("toStation")).value;
    
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
    this.sub = this.stationService
      .createTrip(tripData).subscribe({
        next: trip => {
          alert('trip added succefully')
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
