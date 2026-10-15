import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Create } from './create/create';
import { Login } from './login/login';
import { Profile } from './profile/profile';

const routes: Routes = [
  {
    path: '',
    component: Profile
  },
  {
    path: 'create',
    component: Create
  }, {
    path: 'login',
    component: Login
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
