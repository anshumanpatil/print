import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private $captchaResult = new Subject<any>();
  isLoggedIn: boolean = false;

  constructor() {
    if (localStorage.getItem('token')) {
      this.isLoggedIn = true;
    }
  }

  getTokenStatus(){
    let status = false;
    if (localStorage.getItem('token')) {
      this.isLoggedIn = status = true;
    }
    return status;
  }

  sendCaptchaResult(captchaResult: string) {
    this.$captchaResult.next({ captchaResult });
  }

  clearCaptchaResult() {
    this.$captchaResult.next();
  }

  getCaptchaResult(): Observable<any> {
    return this.$captchaResult.asObservable();
  }

}
