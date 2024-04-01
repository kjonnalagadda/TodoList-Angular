import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent{

  constructor(private apiService: ServiceService, private router: Router){}

  showLogin: any = false;
  showRegister: any = false;

  RegisterFormData = {Name: '', Email: '', Password: '', Confirm_Password: ''};
  LoginFormData = {Email: '', Password: ''};
  message:any;
  showSuccessMessage: boolean = false;
  showFailureMessage: boolean = false;

  ngOnInit(): void {
    
  }

  showRegisterForm() {
    this.showRegister = true;
    this.showLogin = false;
  }

  showLoginForm() {
    this.showLogin = true;
    this.showRegister = false;
  }

  submitRegisterForm() {
    this.apiService.postData(this.RegisterFormData).subscribe(response => {
      if (response.id){
        this.showSuccessMessage = true;
        this.showFailureMessage = false;
      }
      else{
        this.showSuccessMessage = false;
        this.showFailureMessage = true;
      }
    });
  }

  submitLoginForm() {
    this.apiService.loginData(this.LoginFormData).subscribe(response => {
        console.log('Post Response:', response);
        if (response.Result) {
          this.router.navigateByUrl('/dashboard');
          console.log(response.Result, 'login');
        } else {
          console.log('Login failed:', response.Message); 
        }
      },
      error => {
        console.error('Error:', error);
        alert('Invalid Username and Password please check once');
      }
    );
  }

  closeRegisterForm() {
    this.showRegister = false;
  }

}