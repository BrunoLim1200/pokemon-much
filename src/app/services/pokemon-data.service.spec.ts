import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PokemonDataService } from './pokemon-data.service';

describe('PokemonDataService', () => {
   let service: PokemonDataService;

   beforeEach(() => {
      TestBed.configureTestingModule({
         imports: [HttpClientModule],
         providers: [PokemonDataService]
      });
      service = TestBed.inject(PokemonDataService);
   });

   it('should be created', () => {
      expect(service).toBeTruthy();
   });
});
