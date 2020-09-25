import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found-component/not-found-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CreateComponent } from './feature/create/create.component';
import { ReadComponent } from './feature/read/read.component';
import { UpdateComponent } from './feature/update/update.component';
import { DeleteComponent } from './feature/delete/delete.component';
import { ListComponent } from './feature/list/list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: DashboardComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'search', component: ReadComponent },
      { path: 'create', component: CreateComponent },
      { path: 'update', component: UpdateComponent },
      { path: 'delete', component: DeleteComponent },
    ]

  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }