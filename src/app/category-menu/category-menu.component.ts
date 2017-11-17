import { Component, OnInit } from '@angular/core';
import { CollectionCategories } from '../models/collectionCategories';
import {  CollectionsService } from '../services/collections.service';
import { Collection } from '../models/collection';
import { Router } from '@angular/router'

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css'],
  providers: [CollectionsService]
})
export class CategoryMenuComponent implements OnInit {

  categories: CollectionCategories[];
  collection: Collection[];
  errorMessage: string;
  p: number = 1;
  id: string;

  constructor(private _CollectionsService: CollectionsService, private router: Router) { }

  ngOnInit() {
    this._CollectionsService.getCollectonCategories()
        .subscribe(
            data => this.categories = data,
            error => this.errorMessage = <any>error,
            () => console.log(this.categories)
        );
  }

  onClick(category: string){
    this.router.navigate(['/discover/', category])
  }

}
