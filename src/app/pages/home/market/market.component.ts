import { Component, OnInit } from '@angular/core';

declare function require(path: string): any;

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

    item={
        title:"Shoe",
        photo:"assets/img/shoe1.jpg",
        price:85,
        rate:4,
    }
  constructor() { }

  ngOnInit() {

  }

}