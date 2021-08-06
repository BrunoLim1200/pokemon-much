import { NgModule } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
   imports: [
      CommonModule,
      MatTabsModule,
      MatCardModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      FormsModule,
      ReactiveFormsModule
   ],
   exports: [
      MatTabsModule,
      MatCardModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatDialogModule,
      MatListModule,
      FormsModule,
      ReactiveFormsModule,
      MatGridListModule
   ]
})
export class AppMaterialModule {}
