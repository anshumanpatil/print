import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  constructor(private router: Router) { }

  goHome(event) {
    if (this.username == 'demo' && this.password == 'demo') {
      this.router.navigate(['/home']);
    }
    else {
      this.username = 'demo';
      this.password = 'demo';
    }
  }
  ngOnInit(): void {
  }
}
