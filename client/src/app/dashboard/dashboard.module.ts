import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { LogoutModalComponent } from '../app-parts/logout-modal/logout-modal.component';
import { SidebarComponent } from '../app-parts/sidebar/sidebar.component';
import { TopbarComponent } from '../app-parts/topbar/topbar.component';
import { FooterComponent } from '../app-parts/footer/footer.component';


import { CreateComponent } from '../feature/create/create.component';
import { ReadComponent } from '../feature/read/read.component';
import { UpdateComponent } from '../feature/update/update.component';
import { DeleteComponent } from '../feature/delete/delete.component';
import { ListComponent } from '../feature/list/list.component';
import { Routes, RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [];

@NgModule({
  declarations: [
    DashboardComponent,
    LogoutModalComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,

    CreateComponent,
    ListComponent,
    DeleteComponent,
    UpdateComponent,
    ReadComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
