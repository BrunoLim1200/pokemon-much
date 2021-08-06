import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from './navigation/navbar.module';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from './app.material.module';
import { CommonModule } from '@angular/common';

@NgModule({
   declarations: [AppComponent],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      NavbarModule,
      AppMaterialModule,
      HttpClientModule,
      CommonModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule {}
