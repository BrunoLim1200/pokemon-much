import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@NgModule({
   imports: [CommonModule, LayoutModule, FlexLayoutModule],
   exports: [CommonModule, RouterModule, LayoutModule, FlexLayoutModule]
})
export class AppCommonModule {}
