import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'customer-service',
        loadChildren: () => 
            import('./modules/customer-service/customer-service-routing.module').then(
                (m) => m.CustomerServiceRoutingModule
            ),
    }
];
