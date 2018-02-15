import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITEMS } from 'mock/items';


declare function require(path: string): any;

@Component({
  selector: 'app-shorts',
  templateUrl: './shorts.component.html',
  styleUrls: ['./shorts.component.css']
})
export class ShortsComponent implements OnInit {

    
  items=ITEMS;
  constructor() { }

  ngOnInit() {

  }

}