import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar.component';

import { AppMaterialModule } from '../app.material.module';
import { AppCommonModule } from '../app.common.module';
import { PagesModule } from '../pages/pages.module';

@NgModule({
   declarations: [NavbarComponent],
   imports: [
      AppCommonModule,
      AppMaterialModule,
      BrowserModule,
      BrowserAnimationsModule,
      PagesModule
   ]
})
export class NavbarModule {}
