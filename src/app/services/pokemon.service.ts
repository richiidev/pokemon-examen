import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokemonList } from '../models/pokemon';
import { PokemonDetail } from '../models/pokemon.detail';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrlApi: string = environment.baseUrlApi;
  constructor(private http: HttpClient) { }

  getPokemons(id){
    return this.http.get<any>(`${this.baseUrlApi}/pokemon/${id}`)
  }

  getPokemonList(offset: number, limit: number = 20) : Observable<PokemonList[]> {
    return this.http.get<PokemonList[]>(this.baseUrlApi + '/pokemon?offset=' + offset + '&limit=' + limit)
    .pipe(
        map((x: any) => x.results)
    );
}

getPokemonDetail(pokemon: number | string): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(this.baseUrlApi + '/pokemon/' + pokemon);
}
}

