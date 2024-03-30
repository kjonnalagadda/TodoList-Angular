import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
  constructor(private apiService: ServiceService, private router: Router){}

  logOut(): void {
      // Perform logout logic
      this.apiService.logout();
      this.router.navigate(['/login']);
    }
}
