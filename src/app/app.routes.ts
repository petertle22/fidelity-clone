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
    },
    {
        path: 'profile',
        loadChildren: () => 
            import('./modules/profile/profile-routing.module').then(
                (m) => m.ProfileRoutingModule
            ),
    }, 
    {
        path: 'open-an-account',
        loadChildren: () => 
            import('./modules/open-an-account/open-an-account-routing.module').then(
                (m) => m.OpenAnAccountRoutingModule
            ),
    },
    {
        path: 'virtual-assistant',
        loadChildren: () => 
            import('./modules/virtual-assistant/virtual-assistant-routing.module').then(
                (m) => m.VirtualAssistantRoutingModule
            ),
    },
    {
        path: 'trade',
        loadChildren: () => 
            import('./modules/account-and-trade/trade/trade-routing.module').then(
                (m) => m.TradeRoutingModule
            ),
    },
    {
        path: 'portfolio',
        loadChildren: () =>
            import('./modules/account-and-trade/portfolio/portfolio-routing.module').then(
                (m) => m.PortfolioRoutingModule
            ),
    }
];
