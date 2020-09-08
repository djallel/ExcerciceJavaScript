import { Component, OnInit } from '@angular/core';
import set = Reflect.set;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  open=false;

  toggleOpen() {
    this.open=!this.open;
    setTimeout(()=>this.open=false,5000)
  }
}
