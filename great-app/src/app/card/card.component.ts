import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {
	@Input() name: string;
<<<<<<< HEAD

	@Input() picture: string;

=======
>>>>>>> 6840a111c353f1c7819614881e6bee7c2a5f81e1
	@Input() caption: string;
	@Input() link: string;
  constructor() { }

  ngOnInit() {
  	console.log(this.picture);
  }

}
