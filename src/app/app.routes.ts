import { Routes } from '@angular/router'; // Import Route and Routes
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelloComponent } from './hello/hello.component';
// import { AuthGuard } from './auth.guard';


export const routes: Routes = [
    // {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    {path: 'dashboard', component: DashboardComponent },
    {path: '', component: HelloComponent},
    {path: 'login', component: HelloComponent},
    // { path: '**', redirectTo: 'login', pathMatch: 'full' },
];