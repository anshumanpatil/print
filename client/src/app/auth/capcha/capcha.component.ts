import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-capcha',
  template: `<re-captcha (resolved)="resolved($event)" siteKey="6LcnKdUZAAAAABmdga3IqbTmkMuTWgJpkJUS6knO"></re-captcha>`,
  styleUrls: ['./capcha.component.css']
})
export class CapchaComponent implements OnInit {

  constructor(private authService: AuthService) { }

  resolved(captchaResponse: string) {
    this.authService.sendCaptchaResult(captchaResponse);
  }

  ngOnInit(): void {
  }

}
