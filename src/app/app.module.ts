import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { ComponentModule } from './component/component/component.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material/material.module';


@NgModule({
  declarations: [
    AppComponent,
  //  HttpClientModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    MatDialogModule,
    MatSnackBarModule,
    CommonModule,
    ComponentModule,
    BrowserAnimationsModule,
    MaterialModule,
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
