import { Component, OnInit } from '@angular/core';
import { CollectionCategories } from '../models/collectionCategories';
import {  CollectionsService } from '../services/collections.service';
import { Collection } from '../models/collection';
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';


@Component({
  selector: 'app-discover-list',
  templateUrl: './discover-list.component.html',
  styleUrls: ['./discover-list.component.css'],
  providers: [CollectionsService]
})
export class DiscoverListComponent implements OnInit {



      categories: CollectionCategories[];
      collection: Collection[];
      activeRoute: ActivatedRoute;
      errorMessage: string;
      p: number = 1;
      showSpinner: Boolean = true;
      subCategories: Array<any>;

  constructor(private _CollectionsService: CollectionsService, private router: Router, activeRoute: ActivatedRoute) {
    this.activeRoute = activeRoute;
  }

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

    this.activeRoute.params.subscribe(
        (params) => {
          console.log(this.getSubCats(params.categoryName));
          this._CollectionsService.getCollectionById(params.categoryName)
              .subscribe(
                  data => this.collection = data,
                  error => this.errorMessage = <any>error,
                  () => this.showSpinner = false
              );
        }
    );

  }


    addNomination(dataObj){

        this._CollectionsService.createNomination(dataObj.value)
            .subscribe(
                error => this.errorMessage = <any>error,
                () => console.log(this.categories)
            );
        console.log(dataObj.value);
    }

    getSubCats(name){
        console.log(name);
        console.log('works');
        this._CollectionsService.getSubCatsByCategoryName(name)
            .subscribe(
                data => this.subCategories = data,
                error => this.errorMessage = <any>error,
                () => console.log(this.subCategories)
            );
    }


}
