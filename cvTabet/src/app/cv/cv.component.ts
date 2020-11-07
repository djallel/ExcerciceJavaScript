import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  title = 'cvTabet';
  names = ['theresea','Morris','Duane','Taz'];
  constructor() { }

  ngOnInit(): void {
  }

}
