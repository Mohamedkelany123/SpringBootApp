import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { ITrip } from '../models/trip';

@Injectable({
    providedIn: 'root'
})
export class TripService {

    private tripsUrl = 'http://host.docker.internal:8080/api/trips';
    constructor(private http: HttpClient) { }

    createTrip(tripData: any): Observable<any> {
        return this.http.post(this.tripsUrl, tripData);
    }

    getTrips(): Observable<ITrip[]> {
        return this.http.get<ITrip[]>(this.tripsUrl).pipe(
            tap(data => console.log('All', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    updateTrip(id: number, tripData: any): Observable<ITrip> {
        return this.http.put<ITrip>(`${this.tripsUrl}/${id}`, tripData)
    }

    deleteTrip(id: number): Observable<any> {
        return this.http.delete(`${this.tripsUrl}/${id}`)
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