import { Routes } from '@angular/router';
import { NewPageComponent } from './component/new-page/new-page.component';
import { MainPageComponent } from './component/main-page/main-page.component';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'new-page',
    component: NewPageComponent,
  },
];
