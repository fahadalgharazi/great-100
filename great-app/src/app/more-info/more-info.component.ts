import { Component, OnInit } from '@angular/core';
export interface MainEvent{
	event:string;
	link:string;
}

export interface Lifespan{
	birth:number;
	death:number;
}
export interface PersonData{
	
	name: string;
	lifespan: Lifespan;
	birthplace:string;
	//a sentance with a little known fact
	funfact:string;
	//famous moment
	mainEvent:MainEvent;

}

const personInfo : PersonData = {
	name:"Hereddin",
	lifespan:{
		birth:1478,
		death:1546,
	},
	funfact:"He has a red beard and thats why he is called Barborrosa",
	mainEvent:{
		event:"Battle of Preveza",
		link:""
	},
	birthplace:"Lesbos"

}


@Component({
  selector: 'more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.less']
})
export class MoreInfoComponent implements OnInit {
personInfo = personInfo;
  constructor() { }

  ngOnInit() {
  }

}
