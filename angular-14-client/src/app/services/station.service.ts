import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { IStation } from '../models/station';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class StationService {

  private stationsUrl = 'http://host.docker.internal:8080/api/stations';
  constructor(private http: HttpClient) { }

  createStation(stationData: any): Observable<any> {
    return this.http.post(this.stationsUrl, stationData);
  }

  getStations(): Observable<IStation[]> {
    return this.http.get<IStation[]>(this.stationsUrl).pipe(
      tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  updateStation(id:number, stationData: any): Observable<IStation> {
    return this.http.put<IStation>(`${this.stationsUrl}/${id}`, stationData)
  }

  deleteStation(id: number): Observable<any> {
    return this.http.delete(`${this.stationsUrl}/${id}`)
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `an error occured: ${err.error.message}`;
    } else {
      errorMessage = `server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}