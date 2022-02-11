import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { PokemonDetail } from 'src/app/models/pokemon.detail';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  @Input() color = 'bug';
  @Input() value = 0;
  @Input() height = 20;
  pokemon: PokemonDetail;
  classicMode: boolean;

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { 
    this.pokemon = data.pokemon;
    this.classicMode = data.classicMode;
  }

  ngOnInit(): void {
  }


  getAbilities(): string {
    return this.pokemon.abilities.map(x => x.ability.name).join(', ');
  }

  getPrincipalType(list: any[]) {
    return list.filter(x => x.slot === 1)[0]?.type.name;
  }

}