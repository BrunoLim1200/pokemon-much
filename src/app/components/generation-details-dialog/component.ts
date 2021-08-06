import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokemonDataService } from 'src/app/services/pokemon-data.service';

@Component({
   selector: 'app-generation-details',
   templateUrl: './component.html',
   styleUrls: ['./component.scss']
})
export class GenerationDetailsDialogComponent implements OnInit {
   generationDetails: any;

   constructor(
      public dialogRef: MatDialogRef<GenerationDetailsDialogComponent>,
      private pokemonService: PokemonDataService,
      @Inject(MAT_DIALOG_DATA) data: any
   ) {
      this.getAllDetails(data.generationName);
   }

   ngOnInit() {}

   getAllDetails(generationName: string) {
      this.pokemonService.getGameGenerationDetailsByName(generationName).subscribe((response) => {
         this.generationDetails = response;
      });
   }

   textFormatation(string: string) {
      const newString = string.replace('-', ' ');
      const array = newString.split(' ');

      for (var i = 0; i < array.length; i++) {
         array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
      }

      return array.join(' ');
   }

   titleFormater(string: string) {
      const firstString = string.charAt(0).toUpperCase() + string.slice(1);
      const newString = firstString.replace('-', ' ');
      const array = newString.split(' ');

      array[1] = array[1].toUpperCase();

      return array.join(' ');
   }
}
