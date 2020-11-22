import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {MonAffichageComponent} from "./mon-affichage/mon-affichage.component";
import {AfficherAnomalieComponent} from "./afficher-anomalie/afficher-anomalie.component";
import {HistoriqueDesChangementsComponent} from "./historique-des-changements/historique-des-changements.component";
import {FeuilleDeRouteComponent} from "./feuille-de-route/feuille-de-route.component";
import {ResumeComponent} from "./resume/resume.component";
import {GererComponent} from "./gerer/gerer.component";
import {CvComponent} from "./cv/cv.component";
import {DefaultComponent} from "./layouts/default/default.component";
import {DashboardComponent} from "./modules/dashboard/dashboard.component";
import {TableFilteringExampleComponent} from "./table-filtering-example/table-filtering-example.component";
import {PostsComponent} from "./modules/posts/posts.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "MonAffichage", component: MonAffichageComponent},
  {path: "AfficherLesAnomalies", component: AfficherAnomalieComponent},
  {path: "HistoriqueDesChangements", component: HistoriqueDesChangementsComponent},
  {path: "FeuilleDeRoute", component: FeuilleDeRouteComponent},
  {path: "Resume", component: ResumeComponent},
  {path: "Gerer", component: GererComponent},
  {path: "CV", component: CvComponent},
  {
    path: "Default", component: DefaultComponent,
    children: [
      {path: "Dashboard", component: DashboardComponent},
      {path: "Posts", component: PostsComponent}
    ]
  },
  {path: "Table", component: TableFilteringExampleComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
