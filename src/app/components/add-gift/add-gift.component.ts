import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-add-gift',
  templateUrl: './add-gift.component.html',
  styleUrls: ['./add-gift.component.scss']
})
export class AddGiftComponent implements OnInit {
  email: string;
  password: string;
  uid: string;
  user = this.firebaseAuth;

  gifts: Object[];
  constructor(
    private af: AngularFireDatabase,
    private routes: ActivatedRoute,
    private router: Router,
    private firebaseAuth: AngularFireAuth,
    public authService: AuthService
  ) {
    af.list('gifts').valueChanges().subscribe(
      gifts => {
        this.gifts = gifts;
      }
    );
  }

  ngOnInit() {
  }

  addGift(giftName, giftPrice, giftPhoto) {
    console.log('añadiendo gift');
    firebase.database().ref('gifts/').push({
      Name: giftName,
      Value: giftPrice,
      Photo: giftPhoto
    });
    console.log(this.user.auth.currentUser.uid);
  }
  showAddGift() {
    $('.addGiftForm').toggle();
  }
}
