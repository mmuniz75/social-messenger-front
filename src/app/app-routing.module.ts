import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UserRegisterComponent} from './users/user-register/user-register.component'
import { UserListComponent } from './users/user-list/user-list.component';

const routes: Routes = [
  {
    path : "register",
    component : UserRegisterComponent
  },
  {
    path : "list",
    component : UserListComponent
  },
  {
    path : "",
    component : UserListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
