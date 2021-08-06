import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
   imports: [
      CommonModule,
      LayoutModule,
      FlexLayoutModule,
      FormsModule,
      ReactiveFormsModule
   ],
   exports: [
      CommonModule,
      RouterModule,
      LayoutModule,
      FlexLayoutModule,
      FormsModule,
      ReactiveFormsModule
   ]
})
export class AppCommonModule {}
