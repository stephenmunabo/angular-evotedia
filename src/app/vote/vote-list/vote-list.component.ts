import { Component, OnInit } from '@angular/core';
import { CollectionCategories } from '../../models/collectionCategories';
import {  CollectionsService } from '../../services/collections.service';
import { Collection } from '../../models/collection';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { VoteService } from '../../services/vote.service';
import { Votes } from '../../models/votes';

@Component({
  selector: 'app-vote-list',
  templateUrl: './vote-list.component.html',
  styleUrls: ['./vote-list.component.css'],
  providers:[VoteService]
})
export class VoteListComponent implements OnInit {

  vote: Votes[];
  errorMessage: string;
  p: number = 1;
  category: string;
  showSpinner: Boolean = true;



  constructor(private _VoteService: VoteService, private router: Router, private activeRoute: ActivatedRoute) {
    this.activeRoute = activeRoute;
  }

  ngOnInit() {
    let currentCategory = this.activeRoute.snapshot.params['categoryName'];
    this.category = currentCategory;
    console.log(this.category);
    this._VoteService.getCollectionToVote(this.category)
        .subscribe(
            data => this.vote = data,
            error => this.errorMessage = <any>error,
            () => console.log('works')
        );
    console.log(currentCategory);

    this.activeRoute.params.subscribe(
        (params) => {
          this._VoteService.getCollectionToVote(params.categoryName)
              .subscribe(
                  data => this.vote = data,
                  error => this.errorMessage = <any>error,
                  () => this.showSpinner = false
              );
        }
    );

  }




}
