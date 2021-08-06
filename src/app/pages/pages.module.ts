import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonGamesModule } from './pokemon-games/pokemon-games.module';
import { AppMaterialModule } from '../app.material.module';
import { AppCommonModule } from '../app.common.module';
import { PokemonGenerationCardModule } from '../components/pokemon-generation-card/module';

@NgModule({
   imports: [
      CommonModule,
      AppCommonModule,
      PokemonGamesModule,
      AppMaterialModule,
      PokemonGenerationCardModule
   ]
})
export class PagesModule {}
