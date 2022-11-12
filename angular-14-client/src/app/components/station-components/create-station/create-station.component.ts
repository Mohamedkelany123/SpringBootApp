import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-create-station',
  templateUrl: './create-station.component.html',
  styleUrls: ['./create-station.component.css', '../../shared/crud-card.css']
})
export class CreateStationComponent implements OnDestroy {

  sub!: Subscription;

  constructor(private stationService: StationService) { }

  createStation(): void {
    const stationData = {
      name: (<HTMLInputElement>document.getElementById("stationName")).value,
      longitude: (<HTMLInputElement>document.getElementById("longitude")).value,
      latitude: (<HTMLInputElement>document.getElementById("latitude")).value,
    }
    this.sub = this.stationService
      .createStation(stationData).subscribe({
        next: station => {
          alert('station added succefully')
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
