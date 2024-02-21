import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  redirectUrl: string;

  login(name: string, password: string): Observable<boolean> {
    const isAuthenticated = (name === 'pikachu' && password === 'pikachu');
    
    return of(isAuthenticated).pipe(
      delay(1000),
      tap(isAuthenticated => this.isLoggedIn = isAuthenticated)
    );
  }

  logout() {
    this.isLoggedIn = false;
  }
}
