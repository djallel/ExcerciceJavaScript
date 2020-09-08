import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.css']
})
export class ProgressSpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showSpinner=false;

  loadData(){
    this.showSpinner=true;
    setTimeout(()=>this.showSpinner=false,5*1000)
  }

}
