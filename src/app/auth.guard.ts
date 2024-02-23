import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const AuthGuard = () => {
  // console.log('AuthGuard');

  const user = inject(AuthService);
  const router = inject(Router);

  if (user.isLoggedIn) {
    return true;
  }
  router.navigateByUrl('/login')
  return false;
};

