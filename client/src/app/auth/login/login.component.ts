import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from "../../services/login/login.service";
import { AuthService } from "../service/auth.service";
import * as bcrypt from "bcryptjs";
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  constructor(private router: Router, private loginService: LoginService, private authService: AuthService) { }
  
  Register(e){
    localStorage.clear();
    this.router.navigate(['/register']);
  }
  
  Forgot(e){
    localStorage.clear();
    this.router.navigate(['/forgot']);
  }

  goHome(event) {
    const Protector = () => new Promise((resolve, reject) => bcrypt.hash(this.password, this.loginService.salter(this.username), (err, hash) => { err ? reject(err) : resolve(hash) }));
    Protector().then((hash: string) => {
      this.password = hash;
      this.loginService.loginApplication({
        username: this.username,
        password: hash
      }).subscribe(result => {
        if (result.hasOwnProperty('token')) {
          localStorage.setItem('token', result['token']);
          this.authService.isLoggedIn = true;
          this.router.navigate(['/home']);
        }
      },
        err => this.router.navigate(['/']));
    })
  }

  ngOnInit(): void {
  }
}
