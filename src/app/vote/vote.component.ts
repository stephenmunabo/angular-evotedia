import { Component, OnInit } from '@angular/core';
import { CollectionCategories } from '../models/collectionCategories';
import { Votes } from '../models/votes';
import {  CollectionsService } from '../services/collections.service';
import { Collection } from '../models/collection';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { VoteService } from '../services/vote.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css'],
  providers:[VoteService]
})
export class VoteComponent implements OnInit {


  vote: Votes[];
  errorMessage: string;
  p: number = 1;
  category: string;



  constructor(private _VoteService: VoteService, private router: Router, private activeRoute: ActivatedRoute) {
    this.activeRoute = activeRoute;
  }

  ngOnInit() {



    let currentCategory = this.activeRoute.snapshot.params['categoryName'];
    this.category = currentCategory;
    this._VoteService.getCollectionToVote(this.category)
        .subscribe(
            data => this.vote = data,
            error => this.errorMessage = <any>error,
            () => console.log('works')
        );
    console.log(currentCategory);
  }

}
