import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { NgFor, DatePipe } from '@angular/common';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { SearchPokemonComponent } from '../search-pokemon/search-pokemon.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [
    NgFor, 
    DatePipe, 
    BorderCardDirective, 
    PokemonTypeColorPipe, 
    SearchPokemonComponent, 
    RouterLink
  ],
  templateUrl: './list-pokemon.component.html',
  styles: ``,
  providers: [PokemonService]
})


export class ListPokemonComponent implements OnInit {

  pokemonList: Pokemon[] = [];

  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.pokemonService.getPokemonList()
      .subscribe(pokemonList => this.pokemonList = pokemonList);
  }

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id]);
  }

}
