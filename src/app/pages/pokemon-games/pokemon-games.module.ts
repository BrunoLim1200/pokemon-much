import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { PokemonGamesComponent } from './pokemon-games.component';
import { AppMaterialModule } from 'src/app/app.material.module';
import { AppCommonModule } from 'src/app/app.common.module';
import { GenerationDetailsDialogModule } from 'src/app/components/generation-details-dialog/module';

export const PokemonGamesRoutes: Routes = [
   {
      path: '',
      component: PokemonGamesComponent
   }
];

@NgModule({
   declarations: [PokemonGamesComponent],
   imports: [
      CommonModule,
      AppMaterialModule,
      AppCommonModule,
      GenerationDetailsDialogModule
   ]
})
export class PokemonGamesModule {}
