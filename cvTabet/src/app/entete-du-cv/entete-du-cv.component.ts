import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-entete-du-cv',
  templateUrl: './entete-du-cv.component.html',
  styleUrls: ['./entete-du-cv.component.css']
})
export class EnteteDuCvComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
