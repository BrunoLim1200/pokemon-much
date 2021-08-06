import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navigation/navbar.component';
import { PokemonGamesRoutes } from './pages/pokemon-games/pokemon-games.module';

const routes: Routes = [
   {
      path: '',
      component: NavbarComponent,
      children: [...PokemonGamesRoutes]
   }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
   providers: [HttpClientModule]
})
export class AppRoutingModule {}
