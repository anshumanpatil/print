import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl: string = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  loginApplication(credentials: any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: credentials
    };

    return this.http['post'](this.apiUrl + '/users/login', httpOptions)
  }

  salter() {
    const seed = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()];
    // Salt must be 16 bytes
    const bytes = [];
    for (let i = 0, l = seed.length; i < l; i++) {
      bytes.push(seed.charCodeAt(i));
    }
    while (bytes.length < 16) {
      bytes.push(0);
    }
  
    // Convert byte array to base64 string
    const salt = btoa(String.fromCharCode.apply(String, bytes.slice(0, 16)));
  
    // Adding header for bcrypt. Fake 10 rounds
    return '$2a$10$' + salt;
  }
}
