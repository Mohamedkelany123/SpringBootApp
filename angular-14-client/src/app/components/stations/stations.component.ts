import { Component, OnInit } from '@angular/core';
import { IStation } from './station';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent {

  listFilter: string = '';

  stations: IStation[] = [
    {
      "stationId": 1,
      "stationName": "alex",
    },
    {
      "stationId": 2,
      "stationName": "cairo",
    },
    {
      "stationId": 3,
      "stationName": "gharbya",
    },
    {
      "stationId": 4,
      "stationName": "sharkya",
    },
  ];

  deleteItem() {

  }

  ngOnInit(): void {
      
  }

}
