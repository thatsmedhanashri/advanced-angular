import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent
    },
    {
        path:'directives-pipes',
        loadChildren: () => import('./core-directives-pipes/core-directives-pipes.module').then(m => m.CoreDirectivesPipesModule)
    }
];
