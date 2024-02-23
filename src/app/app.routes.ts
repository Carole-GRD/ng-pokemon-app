import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';


export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: '', 
        canActivate: [AuthGuard],
        loadChildren: () => import('./pokemon/pokemon.routes')
    },
    { 
        path: 'login', 
        title: 'Login',
        loadComponent: () => import('./login/login.component').then(module => module.LoginComponent) 
    },
    { 
        path: '**', 
        title: 'Page Not Found',
        loadComponent: () => import('./page-not-found/page-not-found.component').then(module => module.PageNotFoundComponent) 
    }
];

