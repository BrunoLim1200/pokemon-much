import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GenerationDetailsDialogComponent } from 'src/app/components/generation-details-dialog/component';
import { PokemonDataService } from 'src/app/services/pokemon-data.service';

@Component({
   selector: 'app-pokemon-games',
   templateUrl: './pokemon-games.component.html',
   styleUrls: ['./pokemon-games.component.scss']
})
export class PokemonGamesComponent implements OnInit {
   allGenerations: any;

   constructor(private pokemonService: PokemonDataService, private dialog: MatDialog) {}

   ngOnInit(): void {
      this.pokemonService.getAllPokemonGamesGenerations().subscribe((data) => {
         this.allGenerations = data.results;
      });
   }

   openGenerationDetailsDialog(generationName: string) {
      this.dialog
         .open(GenerationDetailsDialogComponent, {
            width: '720px',
            height: '765px',
            data: {
               generationName
            }
         })
         .afterClosed()
         .subscribe(() => {});
   }

   titleFormater(string: string) {
      const firstString = string.charAt(0).toUpperCase() + string.slice(1);
      const newString = firstString.replace('-', ' ');
      const array = newString.split(' ');

      array[1] = array[1].toUpperCase();

      return array.join(' ');
   }
}
