import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {

  pokedex: any;
  pokedexOriginal: any;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getPokemon().subscribe((data) => {
      this.pokedex = data;
      this.pokedexOriginal = data;
    });
  }

  filter(query: string) {
    this.pokedex = this.pokemonService.searchQuery(query, this.pokedexOriginal, 'name');
  }

}
