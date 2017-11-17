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
import { Votes } from '../models/votes';
import { Collection } from '../models/collection';

@Injectable()
export class VoteService {

  constructor(private _http: Http) { }

  private  getCollectionToVoteUrl = 'http://localhost:8000/api/vote';  // URL to web api

  getCollectionToVote(category: string){
    return this._http.get(this.getCollectionToVoteUrl + '/' + category)
        .map((response: Response) => <Votes[]> response.json());
  }
}