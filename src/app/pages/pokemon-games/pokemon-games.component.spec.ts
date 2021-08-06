import { HttpClientModule } from '@angular/common/http';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PokemonDataService } from 'src/app/services/pokemon-data.service';

import { PokemonGamesComponent } from './pokemon-games.component';

describe('PokemonGamesComponent', () => {
   let component: PokemonGamesComponent;
   let fixture: ComponentFixture<PokemonGamesComponent>;

   beforeEach(
      waitForAsync(() => {
         TestBed.configureTestingModule({
            declarations: [PokemonGamesComponent],
            imports: [HttpClientModule, MatDialogModule],
            providers: [PokemonDataService]
         }).compileComponents();
      })
   );

   beforeEach(() => {
      fixture = TestBed.createComponent(PokemonGamesComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
