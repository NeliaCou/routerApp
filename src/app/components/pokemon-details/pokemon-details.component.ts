import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PokemonDetails } from '../../models/pokemon.type';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css'
})
export class PokemonDetailsComponent implements OnInit {
  
  pokemon$!: Observable<PokemonDetails[]>;
  
  constructor(private pokemonService: PokemonService){}


  ngOnInit(): void {
    this.pokemon$ = this.pokemonService.getPokemon(0).pipe(
      map(response => response.results.slice(0, 3))
    )
}
}
