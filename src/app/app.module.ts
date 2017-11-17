import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule }    from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {SidenavComponent} from "./sidenav/sidenav.component";
import {SliderComponent} from "./slider/slider.component";
import {SecondnavComponent} from "./secondnav/secondnav.component";
import { BodyComponent } from './body/body.component';
import { DiscoverComponent } from './discover/discover.component';
import { HomeComponent } from './home/home.component';
import { VoteComponent } from './vote/vote.component';
import { ChartsComponent } from './charts/charts.component';
import { Secondnav2Component } from './secondnav2/secondnav2.component';
import { NominationsComponent } from './home/nominations/nominations.component';
import { NominationsItemComponent } from './home/nominations-item/nominations-item.component';
import { CollectionsService } from './services/collections.service';
import { Collection } from './models/collection';
import { CollectionCategories } from './models/collectionCategories';
import { DiscoverCategoryComponent } from './discover-category/discover-category.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { DiscoverListComponent } from './discover-list/discover-list.component';
import { AddDiscoverComponent } from './add-discover/add-discover.component';
import { VoteListComponent } from './vote/vote-list/vote-list.component';
import { ErrorComponent } from './error/error.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { TestComponent } from './test/test.component';

const appRoutes: Routes = [
      { path: '', component: HomeComponent },
      { path: 'discover', component: DiscoverComponent, children: [
        { path: '', redirectTo: 'all', pathMatch: 'full' },
        { path: 'add', component: AddDiscoverComponent},
        { path: ':categoryName', component: DiscoverListComponent },

      ] },
      { path: 'vote', component: VoteComponent, children: [
        { path: '', redirectTo: 'all', pathMatch: 'full' },
        { path: ':categoryName', component: VoteListComponent },
        { path: '**', component: ErrorComponent }
      ]},
      { path: 'charts', component: ChartsComponent },
      { path: '**', component: ErrorComponent }
    ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    SliderComponent,
    SecondnavComponent,
    BodyComponent,
    DiscoverComponent,
    HomeComponent,
    VoteComponent,
    ChartsComponent,
    Secondnav2Component,
    NominationsComponent,
    NominationsItemComponent,
    DiscoverCategoryComponent,
    CategoryMenuComponent,
    DiscoverListComponent,
    AddDiscoverComponent,
    VoteListComponent,
    ErrorComponent,
    SpinnerComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [CollectionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
