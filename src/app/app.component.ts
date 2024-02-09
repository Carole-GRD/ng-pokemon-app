import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  ngOnInit() {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId: string) {
    const pokemon: Pokemon | undefined = this.pokemonList.find(p => p.id === +pokemonId);

    if (pokemon) {
      console.log(`Vous avez choisi ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    }
    else {
      console.error(`Aucun pokémon trouvé avec l'identifiant ${pokemonId}`);
      console.error("Vous avez demandé un pokémon qui n'existe pas.");
      this.pokemonSelected = pokemon;
    }
  }
}
