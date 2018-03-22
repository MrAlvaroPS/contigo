import { GuestsPageComponent } from './../../components/guests-page/guests-page.component';
import { IntroPageComponent } from './../../components/intro-page/intro-page.component';
import { IndexPageComponent } from '../../components/index-page/index-page.component';
import { ListWedPageComponent } from '../../components/list-wed-page/list-wed-page.component';
import { Routes } from '@angular/router';
import { FoodPageComponent } from '../../components/food-page/food-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: IndexPageComponent },
  { path: 'intro',  component: IntroPageComponent },
  { path: 'guests',  component: GuestsPageComponent },
  { path: 'food',  component: FoodPageComponent },
  { path: 'wedList', component: ListWedPageComponent }
];
