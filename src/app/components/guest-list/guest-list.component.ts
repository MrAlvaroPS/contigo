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
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.scss'],
  providers: [AngularFireDatabase]
})
export class GuestListComponent implements OnInit {
  users: Array<any>;
  transferData: Object[];
  receivedData: Array<any> = [];
  mesa1: Array<any> = [];
  mesa2: Array<any> = [];
  mesa3: Array<any>;

  image1 = '../../images/wed.png';

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
    af.list('mesa1').valueChanges().subscribe(
      mesa1 => {
        this.mesa1 = mesa1;
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

  transferDataSuccess($event: any) {
    this.mesa1.push($event);
    console.log(this);

    firebase.database().ref('mesa1/').push({
      Name: $event.dragData.Name
    });

    if (this.mesa1.some(e => e.Name === $event.dragData.Name)) {
      console.log('holi');
      console.log(this);
    }
}

  transferDataSuccess2($event: any) {
  this.mesa2.push($event);
}

}
