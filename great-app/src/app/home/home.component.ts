import { Component, OnInit } from '@angular/core';
import {PEOPLE}  from '../people';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
readonly people = PEOPLE;
  constructor() { }

  ngOnInit() {
  }

}
