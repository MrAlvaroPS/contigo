import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
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

  reserve() {
        $('.listElemContainer').toggleClass('btnVel');

        console.log (this);

        if ($('.listElemContainer').hasClass('btnVel')) {
          $('.resBtn').text('Reservado');
          $('.resBtn').removeClass('btn-success');
          $('.resBtn').addClass('btn-warning');
          $('.resBtn').css('cursor', 'not-allowed');
        } if (!$('.listElemContainer').hasClass('btnVel')) {
          $('.resBtn').text('Reservar');
          $('.resBtn').removeClass('btn-warning');
          $('.resBtn').addClass('btn-success');
          $('.resBtn').css('cursor', 'pointer');
        }

  }
}
