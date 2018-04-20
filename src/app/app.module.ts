import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { routes } from '../app/routes/app.routes/app.routes.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { ListWedPageComponent } from './components/list-wed-page/list-wed-page.component';
import { HeadBarComponent } from './components/head-bar/head-bar.component';
import { IntroPageComponent } from './components/intro-page/intro-page.component';
import { GuestsPageComponent } from './components/guests-page/guests-page.component';
import { FoodPageComponent } from './components/food-page/food-page.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { WedPageComponent } from './components/wed-page/wed-page.component';
import { GuestListComponent } from './components/guest-list/guest-list.component';
import { GuestTableComponent } from './components/guest-table/guest-table.component';


import { FilterPipe } from './pipes/filter.pipe';
import { AddGiftComponent } from './components/add-gift/add-gift.component';
import { AddFoodComponent } from './components/add-food/add-food.component';
import { environment } from './env/env/env';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { DndModule } from 'ng2-dnd';

const config = {
  apiKey: 'AIzaSyCXmbIqHNnPczedMvF1opqlmAPoCDpQUiw',
  authDomain: 'userlist-3b.firebaseapp.com',
  databaseURL: 'https://userlist-3b.firebaseio.com',
  projectId: 'userlist-3b',
  storageBucket: 'userlist-3b.appspot.com',
  messagingSenderId: '649269537068'
};

firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    ListWedPageComponent,
    FilterPipe,
    HeadBarComponent,
    IntroPageComponent,
    GuestsPageComponent,
    FoodPageComponent,
    CalendarComponent,
    WedPageComponent,
    GuestListComponent,
    GuestTableComponent,
    AddGiftComponent,
    AddFoodComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config, 'angular-auth-firebase'),
    AngularFireAuthModule,
    AngularFireStorageModule,
    DndModule.forRoot()
  ],
  providers: [AngularFireDatabase, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
