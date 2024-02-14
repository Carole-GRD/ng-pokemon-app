import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { pokemonRoutes } from './pokemon/pokemon.module';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
