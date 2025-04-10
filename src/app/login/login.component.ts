import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './login.component.html',
  styles: ``
})


export class LoginComponent implements OnInit {

  message: string = 'Vous êtes déconnecté. ( pikachu / pikachu )';
  name: string;
  password: string;
  auth: AuthService;

  constructor(
    private authService: AuthService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.auth = this.authService;
  }


  setMessage() {
    if (this.authService.isLoggedIn) {
      this.message = 'Vous êtes connecté.';
    } else {
      this.message = 'Identifiant ou mot de passe incorrect.';
    }
  }
  
  login() {
    this.message = 'Tentative de connexion en cours ...';
    this.authService.login(this.name, this.password)
      .subscribe((isLoggedIn: boolean) => {
        this.setMessage();
        if (isLoggedIn) {
          this.router.navigate(['/pokemons']);
        }
        else {
          this.password = '';
          this.router.navigate(['/login']);
        }
    });
  }

  logout() {
    this.authService.logout();
    // this.setMessage();
    this.message = 'Vous êtes déconnecté.';
  }

}
