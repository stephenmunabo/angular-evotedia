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

import { Collection } from '../models/collection';
import { Nominations } from '../models/nominations';
import { CollectionCategories } from '../models/collectionCategories';

@Injectable()
export class CollectionsService {


  private  collectionUrl = 'http://localhost:8000/api/collections';  // URL to web api
  private  collectionCategoryUrl = 'http://localhost:8000/api/collections-categories';  // URL to web api
  private  collectionCategory = 'http://localhost:8000/api/collectionsForCategories';  // URL to web api
  private  addToCollectionUrl = 'http://localhost:8000/api/addCollections';  // URL to web api
  private  getSubCategoriesUrl = 'http://localhost:8000/api/getSubcats';  // URL to web api
  private  addNominationUrl = 'http://localhost:8000/api/addNomination';


  constructor(private _http: Http) { }

  getCollection(): Observable<Collection[]> {
    return this._http.get(this.collectionUrl)
        .map((response: Response) => <Collection[]> response.json());
  }

  getCollectonCategories(): Observable<CollectionCategories[]> {
    return this._http.get(this.collectionCategoryUrl)
        .map((response: Response) => <CollectionCategories[]> response.json());
  }

  getCollectionById(id: string){
    console.log(id);
    return this._http.get(this.collectionCategory + '/' + id)
        .map((response: Response) => <Collection[]> response.json());
  }

  addToCollection(newCollection){
    //let headers = new Headers({ 'Content-Type': 'application/json' });
    //let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(newCollection);

    return this._http.post(this.addToCollectionUrl, body)
        .map((response: Response) => <Collection[]> response.json());
  }

  getSubCatsByCategoryName(name: string){
    console.log(name);
    return this._http.get(this.getSubCategoriesUrl + '/' + name)
        .map((response: Response) => <Collection[]> response.json());
  }


  createNomination(newNomination){
    let body = JSON.stringify(newNomination);

    return this._http.post(this.addNominationUrl, body)
        .map((response: Response) => <Nominations[]> response.json());
}

}
