import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { NgIf } from '@angular/common';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-edit-pokemon',
  standalone: true,
  imports: [NgIf, PokemonFormComponent],
  template: `
    <h2 class="center">Editer {{ pokemon?.name }}</h2>
    <p *ngIf="pokemon" class="center">
      <img [src]="pokemon.picture" alt="Image du pokemon à modifier">
    </p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: ``,
  providers: [PokemonService]
})


export class EditPokemonComponent implements OnInit {

  pokemon: Pokemon|undefined;

  constructor(
    private route: ActivatedRoute,
    // private router: Router,
    private pokemonService: PokemonService,
    private title: Title
  ) { }

  ngOnInit() {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId).subscribe(pokemon => {
        this.pokemon = pokemon;
        this.initTitle(pokemon);
      })
    }
    else {
      this.pokemon = undefined;
    }
  }

  initTitle(pokemon: Pokemon|undefined) {
    if (!pokemon) {
      this.title.setTitle('Pokemon not found');
      return;
    }
    else {
      this.title.setTitle(pokemon.name);
    }
  }
}
