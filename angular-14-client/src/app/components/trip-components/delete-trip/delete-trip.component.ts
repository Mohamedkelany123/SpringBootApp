import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TripService } from 'src/app/services/trips.service';

@Component({
  selector: 'app-delete-trip',
  templateUrl: './delete-trip.component.html',
  styleUrls: ['./delete-trip.component.css', '../../shared/crud-card.css']
})
export class DeleteTripComponent implements OnDestroy {

  sub!: Subscription;

  constructor(private tripService: TripService) { }

  deleteTrip(): void {
    const idString = (<HTMLInputElement>document.getElementById("id")).value;
    const id: number = parseInt(idString);
    
    this.sub = this.tripService
      .deleteTrip(id).subscribe({
        next: trip => {
          alert('trip deleted succefully');
          location.href = 'app-home';
        },
        error: (err: string) => {
          alert('something went wrong');
          console.log(id);
          console.log(idString);
          this.errorMessage = err
        }
      });
  }

  errorMessage: string = '';

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
