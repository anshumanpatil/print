import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router"
import { AuthService } from '../service/auth.service';
import { LoginService } from '../../services/login/login.service';
import { Subscription } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  username: string = "";
  password: string = "";
  showCaptcha = false;
  subscription: Subscription;

  constructor(private router: Router, private authService: AuthService, private loginService: LoginService) { }

  Register(e) {
    this.showCaptcha = true;
  }

  Login(e) {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  Forgot(e) {
    localStorage.clear();
    this.router.navigate(['/forgot']);
  }

  ngOnInit(): void {
    
    this.subscription = this.authService.getCaptchaResult()
      .pipe(
        map((msg: any) => msg),
        flatMap((captchaResult)=>{
          // if(v.hasOwnProperty('captchaResult')){}
          const credentials = {username: this.username, password: this.password};
          this.username = this.password = "";
          return this.loginService.registerApplication(credentials);
        }),
        map(Register => {
          this.router.navigate(['/']);
        })
      )
      .subscribe(Register => {
        this.router.navigate(['/']);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
