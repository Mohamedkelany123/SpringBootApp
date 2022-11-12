import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StationService } from 'src/app/services/station.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-station',
  templateUrl: './update-station.component.html',
  styleUrls: ['./update-station.component.css', '../../shared/crud-card.css']
})
export class UpdateStationComponent implements OnDestroy {

  sub!: Subscription;

  constructor(private stationService: StationService) { }

  updateStation(): void {
    const idString = (<HTMLInputElement>document.getElementById("id")).value;
    const id: number = parseInt(idString);
    const stationData = {
      name: (<HTMLInputElement>document.getElementById("stationName")).value,
      longitude: (<HTMLInputElement>document.getElementById("longitude")).value,
      latitude: (<HTMLInputElement>document.getElementById("latitude")).value,
    }
    this.sub = this.stationService
      .updateStation(id, stationData).subscribe({
        next: station => {
          alert('station updated succefully');
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
