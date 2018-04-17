import { routes } from './../../routes/app.routes/app.routes.module';
import { Component, OnInit } from '@angular/core';
import {NgModule, HostListener} from '@angular/core';
import { Router } from '@angular/router';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  showdiv() {
    console.log('showDivIndex working');
      $('.inputIndexForm').css('opacity', '1');
      $('.inputIndexForm').css('transition', 'opacity 1500ms');
  }

  goReg() {
    console.log('navigando');
    this.router.navigate(['/wedPage/intro']);
  }

  //// evento de raton
  // @HostListener('document:mousemove', ['$event'])
  // onMouseMove(e) {
  //   console.log(e);
  // }
}
