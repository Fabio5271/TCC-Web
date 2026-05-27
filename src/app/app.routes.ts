import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'graphs',
        loadComponent: () => import('./pages/graphs/graphs.component').then(m => m.GraphsComponent)
    },
    {
        path: 'xgboost',
        loadComponent: () => import('./pages/xgboost/xgboost.component').then(m => m.XgboostComponent)
    },
    {
        path: '**',
        redirectTo: 'about'
    }
];
