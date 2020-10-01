import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AngularMaterialModule } from '../angular-material.module';
import { LogoutModalComponent } from '../app-parts/logout-modal/logout-modal.component';
import { SidebarComponent } from '../app-parts/sidebar/sidebar.component';
import { TopbarComponent } from '../app-parts/topbar/topbar.component';
import { FooterComponent } from '../app-parts/footer/footer.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  declarations: [
    DashboardComponent,
    LogoutModalComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
