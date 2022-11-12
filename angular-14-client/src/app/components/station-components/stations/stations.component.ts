import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IStation } from 'src/app/models/station';
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit, OnDestroy{

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredStations = this.performFilter(value);
  }

  constructor(private stationsService: StationService) { }

  errorMessage: string = '';
  stations: IStation[] = [];
  filteredStations: IStation[] = [];
  sub!: Subscription;

  ngOnInit(): void {
    this.sub = this.stationsService.getStations().subscribe({
      next: stations => {
        this.stations = stations;
        this.filteredStations = this.stations;
      },
      error: (err: string) => this.errorMessage = err
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  performFilter(filterBy: string): IStation[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.stations.filter((station: IStation) =>
      station.name.toLocaleLowerCase().includes(filterBy));
  }
}
