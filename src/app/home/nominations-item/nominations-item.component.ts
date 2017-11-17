import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Nomination } from "./nominations.model";

import { Nominations } from '../../models/nominations';
import {  CollectionsService } from '../../services/collections.service';
import {  NominationsService } from '../../services/nominations.service';


@Component({
  selector: 'app-nominations-item',
  templateUrl: './nominations-item.component.html',
  styleUrls: ['./nominations-item.component.css'],
  providers: [NominationsService]
})
export class NominationsItemComponent implements OnInit {

  nominations: Nominations[];
  errorMessage: string;
  p: number = 1;

  constructor(private _NominationsService: NominationsService) { }

  ngOnInit() {
      this._NominationsService.getNominations()
          .subscribe(
              data => this.nominations = data,
              error => this.errorMessage = <any>error,
              () => console.log(this.nominations)
          );
  }

}
