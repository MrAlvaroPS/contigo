import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { gifts } from '../../gifts';
declare var jquery: any;
declare var $: any;


@Component({
  selector: 'app-list-wed-page',
  templateUrl: './list-wed-page.component.html',
  styleUrls: ['./list-wed-page.component.scss'],
  providers: [AngularFireDatabase]
})
export class ListWedPageComponent implements OnInit {
  gifts: Object[];
  $key: string;
  giftList: AngularFireList<any>;

  constructor(
    private af: AngularFireDatabase,
    private routes: ActivatedRoute,
    private router: Router) {
      af.list('gifts').valueChanges().subscribe(
        gift => {
          this.gifts = gift;
        }
      );
    }

  ngOnInit() { }

  // addGift(giftName, giftPrice, giftPhoto) {
  //   console.log('añadiendo gift');
  //   firebase.database().ref('gifts/').push({
  //     Name: giftName,
  //     Value: giftPrice,
  //     Photo: giftPhoto
  //   });
  //   console.log(this.user.auth.currentUser.uid);
  // }

  reserve(div, btn, key, uid, e) {
    // let nombre = key;
    // let manolo = firebase.database().ref('gifts');
    // manolo.orderByChild('Name').equalTo(nombre).on('child_added', function(snapshot) {
    //   firebase.database().ref('gifts/' + snapshot.key).update({
    //     res: true
    //   });
    // });

    // console.log(uid);


        $(div).toggleClass('btnVel');
        if ($(div).hasClass('btnVel')) {
          $(btn).text('Reservado');
          $(btn).removeClass('btn-success');
          $(btn).addClass('btn-warning');
          $(btn).css('cursor', 'not-allowed');
        } if (!$(div).hasClass('btnVel')) {
          $(btn).text('Reservar');
          $(btn).removeClass('btn-warning');
          $(btn).addClass('btn-success');
          $(btn).css('cursor', 'pointer');
        }

  }
}
