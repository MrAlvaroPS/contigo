import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.scss'],
  providers: [AngularFireDatabase]
})
export class GuestListComponent implements OnInit {
  users: Array<any>;

  constructor(
    private af: AngularFireDatabase,
    private routes: ActivatedRoute,
    private router: Router
  ) {
    af.list('users').valueChanges().subscribe(
      users => {
        this.users = users;
      }
    );
  }

  ngOnInit() {
  }
  add(user) {
    console.log('añadiendo');
    firebase.database().ref('users/').push({
      Name: user
    });
    this.users.push(user);
  }

}
