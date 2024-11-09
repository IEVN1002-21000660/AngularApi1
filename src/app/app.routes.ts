import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'utl',
        loadComponent: () => import('./utl/utl.routes')
    }
];
