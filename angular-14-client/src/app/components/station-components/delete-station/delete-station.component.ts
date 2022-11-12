import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-delete-station',
  templateUrl: './delete-station.component.html',
  styleUrls: ['./delete-station.component.css', '../../shared/crud-card.css']
})
export class DeleteStationComponent implements OnDestroy {

  sub!: Subscription;

  constructor(private stationService: StationService) { }

  deleteStation(): void {
    const idString = (<HTMLInputElement>document.getElementById("id")).value;
    const id: number = parseInt(idString);
    
    this.sub = this.stationService
      .deleteStation(id).subscribe({
        next: station => {
          alert('station deleted succefully');
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
