import { routes } from './../../routes/app.routes/app.routes.module';
import { Component, OnInit } from '@angular/core';
import { NgModule, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {
  email: string;
  password: string;
  user = this.firebaseAuth;
  uid = this.user.auth.currentUser.uid;


  constructor(private firebaseAuth: AngularFireAuth, private router: Router, public authService: AuthService) { }

  ngOnInit() { }
  showdiv() {
      $('.inputIndexForm').css('opacity', '1');
      $('.inputIndexForm').css('transition', 'opacity 1500ms');
      console.log(this.user.auth.currentUser.uid);
  }

  goReg() {
    console.log('navigando');
    $('.loginMod').css('opacity', '1');
    // this.router.navigate(['/wedPage/intro']);
  }

  goInvi() {
    this.router.navigate(['/wedPage/intro']);

  }
  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    console.log(this.firebaseAuth.authState);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

  //// evento de raton
  // @HostListener('document:mousemove', ['$event'])
  // onMouseMove(e) {
  //   console.log(e);
  // }
}
