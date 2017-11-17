import { Component, OnInit } from '@angular/core';

import { CollectionCategories } from '../models/collectionCategories';
import {  CollectionsService } from '../services/collections.service';
import { Collection } from '../models/collection';

@Component({
  selector: 'app-add-discover',
  templateUrl: './add-discover.component.html',
  styleUrls: ['./add-discover.component.css']
})
export class AddDiscoverComponent implements OnInit {

  constructor(private _CollectionsService: CollectionsService) { }

  categories: CollectionCategories[];
  errorMessage: any;

  ngOnInit() {
    this._CollectionsService.getCollectonCategories()
        .subscribe(
            data => this.categories = data,
            error => this.errorMessage = <any>error,
            () => console.log(this.categories)
        );
  }

  onSend(dataObj){

    this._CollectionsService.addToCollection(dataObj.value)
        .subscribe(
            error => this.errorMessage = <any>error,
            () => console.log(this.categories)
        );
    console.log(dataObj.value);
  }

}
