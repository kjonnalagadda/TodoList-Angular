import { Routes } from '@angular/router'; // Import Route and Routes
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelloComponent } from './hello/hello.component';
import { AuthGuard } from './auth.guard';


export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'login', component: HelloComponent },
    { path: '', component: HelloComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login by default
];


// import { Routes } from '@angular/router';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { HelloComponent } from './hello/hello.component';
// import { AuthGuard } from './auth.guard';

// export const routes: Routes = [
//     { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
//     { path: 'login', component: HelloComponent, canActivate: [AuthGuard] }, // Protect login route
//     { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redirect to dashboard by default
//     { path: '**', redirectTo: '/dashboard' }, // Redirect to dashboard for unknown routes
// ];
