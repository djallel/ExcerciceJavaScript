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
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CvComponent } from './cv/cv.component';
import { MonAffichageComponent } from './mon-affichage/mon-affichage.component';
import { AfficherAnomalieComponent } from './afficher-anomalie/afficher-anomalie.component';
import { HistoriqueDesChangementsComponent } from './historique-des-changements/historique-des-changements.component';
import { FeuilleDeRouteComponent } from './feuille-de-route/feuille-de-route.component';
import { ResumeComponent } from './resume/resume.component';
import { GererComponent } from './gerer/gerer.component';

import { HomeComponent } from './home/home.component';
import { RouterModule, Routes, Router } from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MatMenuModule } from '@angular/material/menu';
import { TableFilteringExampleComponent } from './table-filtering-example/table-filtering-example.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "MonAffichage", component: MonAffichageComponent },
  { path: "AfficherLesAnomalies", component: AfficherAnomalieComponent },
  { path: "HistoriqueDesChangements", component: HistoriqueDesChangementsComponent },
  { path: "FeuilleDeRoute", component: FeuilleDeRouteComponent },
  { path: "Resume", component: ResumeComponent },
  { path: "Gerer", component: GererComponent },
  { path: "CV", component: CvComponent },
  { path: "Table", component: TableFilteringExampleComponent }
];

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
    ListTechnoComponent,
    MainNavComponent,
    CvComponent,
    MonAffichageComponent,
    AfficherAnomalieComponent,
    HistoriqueDesChangementsComponent,
    FeuilleDeRouteComponent,
    ResumeComponent,
    GererComponent,
    HomeComponent,
    MyDashboardComponent,
    TableFilteringExampleComponent
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
    MatAutocompleteModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
