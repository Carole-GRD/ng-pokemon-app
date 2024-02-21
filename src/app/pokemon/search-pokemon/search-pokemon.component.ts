import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-search-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-pokemon.component.html',
  styles: ``
})


export class SearchPokemonComponent implements OnInit {

  /*
    Subject est une classe de RxJS qui étend Observable.
    Elle permet de stocker les valeurs de recherche successives de l'utilisateur qu'il réalise dans le champ de recherche.
    On va obtenir un flux dans le temps des recherches de l'utilisateur.
    Par exemple : {..."a"..."ab"..."abz"..."ab"..."abc"...}
  */
  searchTerm = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;

  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.pokemons$ = this.searchTerm.pipe(
      // Flux : {..."a"."ab"..."abz"."ab"..."abc"...}

      // attendre 300ms de pause entre chaque requête
      debounceTime(300),
      // {..."ab"..."ab"..."abc"...}

      // ignorer la recherche en cours si c'est la même que la précédente
      distinctUntilChanged(),
      // {..."ab"......"abc"...}

      // on retourne la liste des résultats correspondant aux termes de recherche
      switchMap((term: string) => this.pokemonService.searchPokemonList(term))
      // {...pokemonList(ab)......pokemonList(abc)...}

      /*
        switchMap : 
        à chaque fois que l'utilisateur tape une lettre, 
        on annule la recherche précédente pour en lancer une nouvelle
      */
    );
  }

  search(term: string) {
    this.searchTerm.next(term);
  }

  goToDetail(pokemon: Pokemon) {
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
