import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { IUser } from '../models/user';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private signinUrl = 'http://localhost:'+environment.apiUrl+'/api/user/signIn';
  private signupUrl = 'http://localhost:'+environment.apiUrl+'/api/user';
  constructor(private http: HttpClient) { }

  signUp(userData: any): Observable<any> {
    return this.http.post(this.signupUrl, userData);
  }

  signIn(userData: any): Observable<any> {
    return this.http.put(this.signinUrl, userData);
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
