import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions }    from '@angular/http';
import  { Observable } from 'rxjs/Observable';


// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

import { Nominations } from '../models/nominations';

@Injectable()
export class NominationsService {

  constructor(private _http: Http) { }

  private  getNominationsUrl = 'http://localhost:8000/api/getNominations';  // URL to web api

  getNominations(): Observable<Nominations[]> {
    return this._http.get(this.getNominationsUrl)
        .map((response: Response) => <Nominations[]> response.json());
  }
}
