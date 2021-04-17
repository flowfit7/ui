import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './auth/login/login.component';
import { RegsiterComponent } from './auth/regsiter/regsiter.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';

export const routes: Routes = [

  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },

  // {path: '**', component: HomepageComponent, pathMatch: 'full'}
  // {
  //   path: 'pages',
  //   loadChildren: () => import('./pages/pages.module')
  //     .then(m => m.PagesModule),
  // },    
 
  // {
  //   path: 'auth',
  //   children: [
  //     {
  //       path: 'login',
  //       component: LoginComponent,
  //     },
  //     {
  //       path: 'register',
  //       component: RegsiterComponent,
  //     },      
  //   ],
  // },
  // { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  // { path: '**', redirectTo: 'auth/register'},
  
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
