// import { CanActivateFn } from '@angular/router';
// import { ServiceService } from './service.service';

// export const authGuard: CanActivateFn = (route, state) => {
//   // const service = new ServiceService(); // Create an instance of ServiceService
//   // Check if the user is logged in using your ServiceService instance
//   if (service.isAuthenticatedUser()) {
//     return true; // Allow navigation
//   } else {
//     // Redirect the user to the login page or handle unauthorized access
//     console.error('Unauthorized access. Redirecting to login page...');
//     return false; // Deny access
//   }
// };

import { CanActivate, CanActivateFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private serviceService: ServiceService) {}

  canActivate(): boolean {
    if (this.serviceService.isAuthenticatedUser()) {
      return true;
    } else {
      console.error('Unauthorized access. Redirecting to login page...');
      return false;
    }
  }
}
