import { Component, OnInit } from '@angular/core';
import { CollectionCategories } from '../models/collectionCategories';
import {  CollectionsService } from '../services/collections.service';
import { Collection } from '../models/collection';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-discover-category',
  templateUrl: './discover-category.component.html',
  styleUrls: ['./discover-category.component.css'],
  providers: [CollectionsService]
})
export class DiscoverCategoryComponent implements OnInit {

  collection: Collection[];
  errorMessage: string;
  p: number = 1;
  category: string;

  constructor(private _CollectionsService: CollectionsService, private router: Router, private activeRoute: ActivatedRoute ) { }

  ngOnInit() {
      let currentCategory = this.activeRoute.snapshot.params['category'];
    this.category = currentCategory;

    this._CollectionsService.getCollectionById(this.category)
        .subscribe(
            data => this.collection = data,
            error => this.errorMessage = <any>error,
            () => console.log(this.collection)
        );
    console.log(currentCategory);
  }



}
