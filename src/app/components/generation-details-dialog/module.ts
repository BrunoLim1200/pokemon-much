import { NgModule } from '@angular/core';
import { AppCommonModule } from 'src/app/app.common.module';
import { AppMaterialModule } from 'src/app/app.material.module';

import { GenerationDetailsDialogComponent } from './component';

@NgModule({
   declarations: [GenerationDetailsDialogComponent],
   imports: [AppCommonModule, AppMaterialModule],
   exports: [GenerationDetailsDialogComponent],
   entryComponents: [GenerationDetailsDialogComponent]
})
export class GenerationDetailsDialogModule {}
