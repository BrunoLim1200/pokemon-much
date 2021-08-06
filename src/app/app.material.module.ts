import { NgModule } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
   imports: [
      CommonModule,
      MatTabsModule,
      MatCardModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatDialogModule,
      MatGridListModule,
      MatToolbarModule
   ],
   exports: [
      MatTabsModule,
      MatCardModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatDialogModule,
      MatGridListModule,
      MatToolbarModule
   ]
})
export class AppMaterialModule {}
