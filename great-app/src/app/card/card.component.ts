import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {
	@Input() name: string;

	@Input() picture: string;

	@Input() caption: string;
	@Input() link: string;
  constructor() { }

  ngOnInit() {
  	console.log(this.picture);
  }

}
