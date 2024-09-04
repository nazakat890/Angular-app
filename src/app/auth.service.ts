import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    if (!localStorage.getItem('token')) {
        this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }
      return this.loggedIn;
  }
}
