import { Routes } from '@angular/router';
import { HomePagComponent } from './shared/pages/home-page/home-pag.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePagComponent,
  },

   {
     path: 'country',
      loadChildren: () => import('./country/country.routes'),
   },

  {
    path: '**',
    redirectTo: ''
  }
];
