import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  constructor() { 
    if(localStorage.getItem('token')){
      this.isLoggedIn = true;
    }
  }
}
