import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrlApi: string = environment.baseUrlApi;
  constructor(private http: HttpClient) { }

  getPokemons(id){
    return this.http.get<any>(`${this.baseUrlApi}/pokemon/${id}`)
  }
}

