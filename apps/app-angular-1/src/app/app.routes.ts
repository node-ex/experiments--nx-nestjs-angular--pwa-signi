import { Route } from '@angular/router';
import { HomeViewComponent } from './home/home-view.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeViewComponent,
  },
];
