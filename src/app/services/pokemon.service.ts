import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.type';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly BASE_URL:string = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }

  getPokemon(numberOfPokemon: number): Observable<Pokemon>{
    return this.http.get<Pokemon>(this.BASE_URL + 'pokemon/' + '?offset=3&limit=' + numberOfPokemon);
  }
}
