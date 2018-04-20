import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-guests-page',
  templateUrl: './guests-page.component.html',
  styleUrls: ['./guests-page.component.scss']
})
export class GuestsPageComponent implements OnInit {
  email: string;
  password: string;
  user = this.firebaseAuth;

  constructor(private firebaseAuth: AngularFireAuth) { }

  ngOnInit() {
  }

}
