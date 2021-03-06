import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  },{
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
  }, {
    path: 'signup',
    loadChildren: './signup/signup.module#SignupModule',
  },
  { 
    path: 'store',
    loadChildren: './store/store.module#StoreModule',

  }, {
    path: '',
    loadChildren: './signup/signup.module#SignupModule',
  },{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
