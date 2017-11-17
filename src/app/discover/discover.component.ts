import { Component, OnInit } from '@angular/core';
import { CollectionCategories } from '../models/collectionCategories';
import {  CollectionsService } from '../services/collections.service';
import { Collection } from '../models/collection';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css'],
  providers: [CollectionsService]
})
export class DiscoverComponent implements OnInit {

  constructor(private _CollectionsService: CollectionsService) { }

  categories: CollectionCategories[];
  collection: Collection[];
  errorMessage: string;
  p: number = 1;

  ngOnInit() {
    this._CollectionsService.getCollectonCategories()
        .subscribe(
            data => this.categories = data,
            error => this.errorMessage = <any>error,
            () => console.log(this.categories)
        );

    this._CollectionsService.getCollection()
        .subscribe(
            data => this.collection = data,
            error => this.errorMessage = <any>error,
            () => console.log(this.collection)
        );
  }

}
