import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-wed-page',
  templateUrl: './wed-page.component.html',
  styleUrls: ['./wed-page.component.scss']
})
export class WedPageComponent implements OnInit {
  email: string;
  password: string;
  user = this.firebaseAuth;

  constructor(private firebaseAuth: AngularFireAuth) { }

  ngOnInit() {
  }

}
