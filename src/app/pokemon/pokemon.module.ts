import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';



export const pokemonRoutes: Routes = [
  { path: '', component: ListPokemonComponent },
  { path: ':id', component: DetailPokemonComponent }

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonRoutes)
  ]
})


export class PokemonModule { }
