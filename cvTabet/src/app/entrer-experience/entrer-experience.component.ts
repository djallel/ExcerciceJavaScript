import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-entrer-experience',
  templateUrl: './entrer-experience.component.html',
  styleUrls: ['./entrer-experience.component.css']
})
export class EntrerExperienceComponent implements OnInit {
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  constructor() { }

  ngOnInit(): void {
  }

}
