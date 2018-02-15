import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITEMS } from 'mock/items';


declare function require(path: string): any;

@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css']
})
export class ShirtsComponent implements OnInit {

    
  items=ITEMS;
  constructor() { }

  ngOnInit() {

  }

}