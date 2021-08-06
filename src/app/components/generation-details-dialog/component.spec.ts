import { HttpClientModule } from '@angular/common/http';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokemonDataService } from 'src/app/services/pokemon-data.service';

import { GenerationDetailsDialogComponent } from './component';

describe('GenerationDetailsDialogComponent', () => {
   let component: GenerationDetailsDialogComponent;
   let fixture: ComponentFixture<GenerationDetailsDialogComponent>;

   beforeEach(
      waitForAsync(() => {
         TestBed.configureTestingModule({
            declarations: [GenerationDetailsDialogComponent],
            imports: [HttpClientModule],
            providers: [
               { provide: MAT_DIALOG_DATA, useValue: {} },
               { provide: MatDialogRef, useValue: {} },
               PokemonDataService
            ]
         }).compileComponents();
      })
   );

   beforeEach(() => {
      fixture = TestBed.createComponent(GenerationDetailsDialogComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
