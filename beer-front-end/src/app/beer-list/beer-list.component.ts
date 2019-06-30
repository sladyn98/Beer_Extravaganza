import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  numbers;
  constructor() {
    this.numbers = Array(6).fill(0).map((x,i)=>i);
   }

  ngOnInit() {
  }

}
