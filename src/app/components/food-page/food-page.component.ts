import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss'],
  providers: [AngularFireDatabase]
})
export class FoodPageComponent implements OnInit {
  foods: Object[];

  constructor(
    private af: AngularFireDatabase,
    private routes: ActivatedRoute,
    private router: Router) {
      af.list('foods').valueChanges().subscribe(
        foods => {
          this.foods = foods;
        }
      );
    }

  ngOnInit() {
  }
  addFood() {
    $('.addFoodForm').toggleClass('invisible');
  }
}
