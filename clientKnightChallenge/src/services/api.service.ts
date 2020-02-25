import { Injectable } from '@angular/core';
import {
  HttpClient,
 
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import {
  map,
  catchError,
  tap
} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public is_possible_move(data): Observable<any> {
    return this.http.post(environment.apiBaseUrl + '/is_possible_move', data, {
    }).pipe(
      map(response => (response as any).sessionGame),
      tap(response => {
        return response;
      })
     
    );
  }
}
