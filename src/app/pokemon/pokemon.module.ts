import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { FormsModule } from '@angular/forms';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../in-memory-data.service';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';


export const pokemonRoutes: Routes = [
  { path: 'add', component: AddPokemonComponent },
  { path: 'edit/:id', component: EditPokemonComponent },
  { path: '', component: ListPokemonComponent },
  { path: ':id', component: DetailPokemonComponent }

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule, 
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    RouterModule.forChild(pokemonRoutes)
  ]
})


export class PokemonModule { }
