import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { routes } from '../app/routes/app.routes/app.routes.module';


import { AppComponent } from './app.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { ListWedPageComponent } from './components/list-wed-page/list-wed-page.component';

import { FilterPipe } from './pipes/filter.pipe';
import { HeadBarComponent } from './components/head-bar/head-bar.component';
import { IntroPageComponent } from './components/intro-page/intro-page.component';
import { GuestsPageComponent } from './components/guests-page/guests-page.component';
import { FoodPageComponent } from './components/food-page/food-page.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    ListWedPageComponent,
    FilterPipe,
    HeadBarComponent,
    IntroPageComponent,
    GuestsPageComponent,
    FoodPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
