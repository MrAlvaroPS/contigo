import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss'],
  providers: [AngularFireDatabase]
})
export class FoodPageComponent implements OnInit {
  primeros: Object[];
  segundos: Object[];
  terceros: Object[];
  postres: Object[];
  email: string;
  password: string;
  user = this.firebaseAuth;

  constructor(
    private af: AngularFireDatabase,
    private routes: ActivatedRoute,
    private router: Router,
    private firebaseAuth: AngularFireAuth) {
      af.list('primeros').valueChanges().subscribe(
        primeros => {
          this.primeros = primeros;
        }
      );
      af.list('segundos').valueChanges().subscribe(
        segundos => {
          this.segundos = segundos;
        }
      );
      af.list('terceros').valueChanges().subscribe(
        terceros => {
          this.terceros = terceros;
        }
      );
      af.list('postres').valueChanges().subscribe(
        postres => {
          this.postres = postres;
        }
      );
    }

  ngOnInit() {
  }
  addFood() {
    $('.addFoodForm').toggleClass('invisible');
  }
}
