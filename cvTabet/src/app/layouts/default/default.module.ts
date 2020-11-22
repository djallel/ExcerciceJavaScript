import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DefaultComponent} from "./default.component";
import {DashboardComponent} from "../../modules/dashboard/dashboard.component";
import {RouterModule} from "@angular/router";
import {PostsComponent} from "../../modules/posts/posts.component";
import {SahredModule} from "../../sahred/sahred.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatMenuModule} from "@angular/material/menu";
import {FlexLayoutModule} from "@angular/flex-layout";



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SahredModule,
    MatSidenavModule,
    FlexLayoutModule
  ]
})
export class DefaultModule { }
