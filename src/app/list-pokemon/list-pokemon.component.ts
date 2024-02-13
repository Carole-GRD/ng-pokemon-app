import { Component } from '@angular/core';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [CommonModule, BorderCardDirective, PokemonTypeColorPipe],
  templateUrl: './list-pokemon.component.html',
  styles: ``
})


export class ListPokemonComponent {

  pokemonList: Pokemon[] = POKEMONS;

  constructor(private router: Router) { }

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id]);
  }

}
