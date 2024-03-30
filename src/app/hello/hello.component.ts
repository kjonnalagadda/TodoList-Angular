import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent{
  static submitLoginForm(): any {
      throw new Error('Method not implemented.');
  }
    
  constructor(private apiService: ServiceService, private router: Router){}

  showLogin: any = false;
  showRegister: any = false;

  RegisterFormData = {Name: '', Email: '', Password: '', Confirm_Password: ''};
  LoginFormData = {Email: '', Password: ''};
  message:any;
  showSuccessMessage: boolean = false;
  showFailureMessage: boolean = false;

  // @Output() close: EventEmitter<void> = new EventEmitter();

  ngOnInit(): void {
    if (this.apiService.isAuthenticatedUser()) {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  showRegisterForm() {
    this.showRegister = true;
    this.showLogin = false;

    // this.showRegister = !this.showRegister;
    // this.showLogin = false; 
  }

  showLoginForm() {
    this.showLogin = true;
    this.showRegister = false;
    
    // this.showLogin = !this.showLogin;
    // this.showRegister = false;
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

    //   setTimeout(() => {
    //     this.showSuccessMessage = false;
    //     this.showFailureMessage = false;
    //     // You may want to reset the form fields here
    //   }, 8000); // Reset success message after 3 seconds (adjust as needed)
    // // Handle response as needed
    });
  }

  submitLoginForm() {
    this.apiService.loginData(this.LoginFormData).subscribe(response => {
        console.log('Post Response:', response);
        if (response.Result) {
          this.router.navigateByUrl('/dashboard');
          console.log(response.Result, 'login');
          // window.open('/dashboard', '_blank');
        } else {
          console.log('Login failed:', response.Message); 
        }
      },
      error => {
        console.error('Error:', error); // Log any errors that occur during the API call
        alert('Invalid Username and Password please check once');
      }
    );
  }

  closeRegisterForm() {
    this.showRegister = false;
  }

}

// newString:any = 'johncena';
// newArray:any = [0, 5, 63, 12, 45, 23, 89, 45, 120, 456, 326, 524];
// newData:any = '';
// userData:any = '';

// name() {
//   console.log(this.newString);
// }

// arrayLoop() {
//   for(let char in this.newArray){
//     console.log(char);
//   }
// }

// getDataAPI() {
//   this.apiService.getData().subscribe(response =>{
//     this.userData = response;
//     console.log(this.userData, 'userData');
//   });
// }

// submitForm() {
//   this.apiService.postData(this.formData).subscribe(response => {
//     console.log('Post Response:', response);
//     // Handle response as needed
//   });
// }

// getDataById(id: number) {
//   this.apiService.getDataById(id).subscribe(response => {
//     this.dataById = response;
//   });
// }

//   // Method to handle row click
// handleRowClick(id: number) {
//   console.log('Clicked ID:', id);
//   // You can perform any action with the clicked ID here
// }