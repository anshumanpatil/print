import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from "./angular-material.module";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './main/app.component';
import { LoginComponent } from './login/login.component';
import { ProductService } from './services/product.service';
import { LoginService } from './services/login/login.service';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ProductService, LoginService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
