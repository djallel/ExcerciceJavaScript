import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  situationMartial = "Célibataire.";
  nombreEnfant = "0 Enfants."
  typePermis = "Permis B."
  age = "30 ans";
  mel = "b_tabet@esi.dz"
  tel = "+33 (0) 7 68 01 03 64"
  nom="TABET Belaid Djalal"
  mobilite="Toute la France"
  skype="contact.tabet"



  constructor() { }

  ngOnInit(): void {
  }

  getSituationMatrial (){
    return this.situationMartial
  }

}
