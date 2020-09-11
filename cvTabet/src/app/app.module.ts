import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompetenceTechniqueComponent } from './competence-technique/competence-technique.component';
import { StepperComponent } from './stepper/stepper.component';
import {MatStepperModule} from "@angular/material/stepper";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import { EnteteDuCvComponent } from './entete-du-cv/entete-du-cv.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import { PhotoCardComponent } from './photo-card/photo-card.component';
import { ContactComponent } from './contact/contact.component';
import { StepperHorizontalComponent } from './stepper-horizontal/stepper-horizontal.component';
import { EntrerExperienceComponent } from './entrer-experience/entrer-experience.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { ListTechnoComponent } from './list-techno/list-techno.component';
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {MatAutocompleteModule} from "@angular/material/autocomplete";

@NgModule({
  declarations: [
    AppComponent,
    CompetenceTechniqueComponent,
    StepperComponent,
    EnteteDuCvComponent,
    PhotoCardComponent,
    ContactComponent,
    StepperHorizontalComponent,
    EntrerExperienceComponent,
    ListTechnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatGridListModule,
    MatCardModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
