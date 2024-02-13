import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, BorderCardDirective, PokemonTypeColorPipe],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | null;

  ngOnInit() {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId: string) {
    const pokemon: Pokemon | undefined = this.pokemonList.find(p => p.id === +pokemonId);

    if (pokemon) {
      console.log(`Vous avez choisi ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    }
    else if (pokemonId === "") {
      this.pokemonSelected = null;
      console.warn("Backspace");
    }
    else {
      console.error("Vous avez demandé un pokémon qui n'existe pas.");
      this.pokemonSelected = null;
    }
  }
}
