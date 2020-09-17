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

  allowNewServer= false;
  allowNewServer1= false;
  constructor() {
    // setTimeout(()=>this.allowNewServer=false,2000)
    setInterval(()=>{
      this.allowNewServer=!this.allowNewServer;
      console.log("allowNewServer constructor => "+this.allowNewServer)
    },5000)
  }

  ngOnInit(): void {
  }

  disableButton (){
    setInterval(()=>{
      this.allowNewServer1=!this.allowNewServer1;
      console.log("allowNewServer disableButton => "+this.allowNewServer1)
    },5000)
  }

}
