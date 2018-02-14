import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITEMS } from 'mock/items';


declare function require(path: string): any;

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

    
  items=ITEMS;
  constructor() { }

  ngOnInit() {

  }

}