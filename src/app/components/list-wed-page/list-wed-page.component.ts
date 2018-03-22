import { Component, OnInit } from '@angular/core';
import { gifts } from '../../gifts';

@Component({
  selector: 'app-list-wed-page',
  templateUrl: './list-wed-page.component.html',
  styleUrls: ['./list-wed-page.component.scss']
})
export class ListWedPageComponent implements OnInit {
  gifts: Object[] = gifts;

  constructor() { }

  ngOnInit() { }

}
