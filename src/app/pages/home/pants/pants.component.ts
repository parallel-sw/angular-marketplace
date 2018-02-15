import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITEMS } from 'mock/items';


declare function require(path: string): any;

@Component({
  selector: 'app-pants',
  templateUrl: './pants.component.html',
  styleUrls: ['./pants.component.css']
})
export class PantsComponent implements OnInit {

    
  items=ITEMS;
  constructor() { }

  ngOnInit() {

  }

}