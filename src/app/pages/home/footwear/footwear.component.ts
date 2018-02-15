import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITEMS } from 'mock/items';


declare function require(path: string): any;

@Component({
  selector: 'app-footwear',
  templateUrl: './footwear.component.html',
  styleUrls: ['./footwear.component.css']
})
export class FootwearComponent implements OnInit {

    
  items=ITEMS;
  constructor() { }

  ngOnInit() {

  }

}