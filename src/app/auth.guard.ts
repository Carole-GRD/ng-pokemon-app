import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const AuthGuard = () => {
  console.log('AuthGuard');

  const user = inject(AuthService);
  const router = inject(Router);

  if(!user.isLoggedIn) {
    router.navigateByUrl('/login')
    return false
  }
  return true

};


// import { Injectable } from '@angular/core';
// import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot }
//     from '@angular/router';
// import { AuthService } from './auth.service';
  
// @Injectable()
// export class AuthGuard implements CanActivate {
  
//     constructor(private authService: AuthService, private router: Router) { }
  
//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//         let url: string = state.url;
//         return this.checkLogin(url);
//     }
  
//     checkLogin(url: string): boolean {
//         if (this.authService.isLoggedIn) { return true; }
//         this.authService.redirectUrl = url;
//         this.router.navigate(['/login']);
  
//         return false;
//     }
// }