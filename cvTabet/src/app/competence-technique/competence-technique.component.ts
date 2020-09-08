import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  technologie: string;
  niveau: string;
  connaissance: string;
  certification: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {technologie: 'Hydrogen', niveau: 'Hydrogen',  connaissance: 'H', certification: 'oui'},
  {technologie: 'Hydrogen', niveau: 'Hydrogen',  connaissance: 'H' ,certification: 'certification'},
];

@Component({
  selector: 'app-competence-technique',
  templateUrl: './competence-technique.component.html',
  styleUrls: ['./competence-technique.component.css']
})
export class CompetenceTechniqueComponent   {

  displayedColumns: string[] = ['certification', 'niveau', 'connaissance','certification'];
  dataSource = ELEMENT_DATA;

}
