import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTablaComponent } from './pokemon-tabla.component';

describe('PokemonTablaComponent', () => {
  let component: PokemonTablaComponent;
  let fixture: ComponentFixture<PokemonTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
