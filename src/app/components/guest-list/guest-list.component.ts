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
  mesa3: Array<any> = [];
  mesa4: Array<any> = [];
  mesa5: Array<any> = [];
  mesa6: Array<any> = [];
  email: string;
  password: string;
  user = this.firebaseAuth;

  image1 = '../../images/wed.png';

  constructor(
    private af: AngularFireDatabase,
    private routes: ActivatedRoute,
    private router: Router,
    private firebaseAuth: AngularFireAuth
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
    af.list('mesa2').valueChanges().subscribe(
      mesa2 => {
        this.mesa2 = mesa2;
      }
    );
    af.list('mesa3').valueChanges().subscribe(
      mesa3 => {
        this.mesa3 = mesa3;
      }
    );
    af.list('mesa4').valueChanges().subscribe(
      mesa4 => {
        this.mesa4 = mesa4;
      }
    );
    af.list('mesa5').valueChanges().subscribe(
      mesa5 => {
        this.mesa5 = mesa5;
      }
    );
    af.list('mesa6').valueChanges().subscribe(
      mesa6 => {
        this.mesa6 = mesa6;
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
    firebase.database().ref('mesa2/').push({
      Name: $event.dragData.Name
    });
  }

  transferDataSuccess3($event: any) {
    this.mesa3.push($event);
    firebase.database().ref('mesa3/').push({
      Name: $event.dragData.Name
    });
  }

  transferDataSuccess4($event: any) {
    this.mesa4.push($event);
    firebase.database().ref('mesa4/').push({
      Name: $event.dragData.Name
    });
  }

  transferDataSuccess5($event: any) {
    this.mesa5.push($event);
    firebase.database().ref('mesa5/').push({
      Name: $event.dragData.Name
    });
  }

  transferDataSuccess6($event: any) {
    this.mesa6.push($event);
    firebase.database().ref('mesa6/').push({
      Name: $event.dragData.Name
    });
  }

  showForm() {
    $('.addGuest').toggle();
  }

  removeEntrie(nombre) {
    console.log(this.user.auth.currentUser.uid);
  }

}
