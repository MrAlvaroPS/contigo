import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { gifts } from '../../gifts';

@Component({
  selector: 'app-list-wed-page',
  templateUrl: './list-wed-page.component.html',
  styleUrls: ['./list-wed-page.component.scss'],
  providers: [AngularFireDatabase]
})
export class ListWedPageComponent implements OnInit {
  gifts: Object[];

  constructor(
    private af: AngularFireDatabase,
    private routes: ActivatedRoute,
    private router: Router) {
      af.list('gifts').valueChanges().subscribe(
        gifts => {
          this.gifts = gifts;
        }
      );
    }

  ngOnInit() { }
}