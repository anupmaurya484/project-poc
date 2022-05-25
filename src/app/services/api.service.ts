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
export class APIService {

//Request_url = environment.Development_SERVER_URL;
Request_url = environment.Live_SERVER_URL;
  constructor(private http: HttpClient) { }
  // Get Total Followers
  AddCountact(Data) {
    return this.http.post<Response[]>(this.Request_url + '/admin/addContacUs', Data, httpOptions)
    .pipe(
        map(response => response),
        catchError(error => {
          return throwError(error);
        })
    );
  }
}
