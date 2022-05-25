
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

// all the below imports
import { map, catchError } from 'rxjs/operators';

// Server Link
import { environment } from '../../environments';
// Content Type
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }
  // Get Total Followers

  GetData(){
    new Observable((observer) => {
        const {next, error} = observer;
        var data = "Test"
        return {unsubscribe() {data}};
      });
  }


}
