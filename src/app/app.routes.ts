import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';


export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'pokemon', 
        canActivate: [AuthGuard],
        loadChildren: () => import('./pokemon/pokemon.module').then(module => module.PokemonModule)
    },
    // {
    //     path: '', 
    //     canActivate: [AuthGuard],
    //     loadChildren: () => import('./pokemon/pokemon.routes')
    // },
    { 
        path: 'login', 
        loadComponent: () => import('./login/login.component').then(module => module.LoginComponent) 
    },
    { 
        path: '**', 
        loadComponent: () => import('./page-not-found/page-not-found.component').then(module => module.PageNotFoundComponent) 
    }
];

