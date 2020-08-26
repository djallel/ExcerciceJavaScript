import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { MatSliderModule } from '@angular/material/slider';
import { TypographyComponent } from './typography/typography.component';
import { ButtonComponent } from './button/button.component';
import {MatDividerModule} from "@angular/material/divider";
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";
import { IconComponent } from './icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonComponent,
    ToggleButtonComponent,
    IconComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatSliderModule,
        MatDividerModule,
        MatButtonToggleModule,
        MatIconModule,
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
