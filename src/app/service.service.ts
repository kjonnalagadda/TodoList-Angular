import { Injectable, PLATFORM_ID, Inject, NgModule } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'; // Import isPlatformBrowser
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})

export class ServiceService {

  private readonly AUTH_KEY = 'authenticated';


  constructor(private http: HttpClient, private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  mainURL:any = 'http://127.0.0.1:8000/registration/';

  getData(): Observable<any> {
    const getResponse = this.http.get(this.mainURL);
    return getResponse;
  }

  postData(formData: any): Observable<any> {
    const postReponse = this.http.post(this.mainURL+'register/', formData);
    return postReponse;
  }

  loginData(formData: any): Observable<any> {
    const postReponse = this.http.post(this.mainURL+'userlogin/', formData);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.AUTH_KEY, 'true');
    }
    return postReponse;
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.AUTH_KEY);
    }
  }

  isAuthenticatedUser(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.AUTH_KEY) === 'true';
    }
    return false;
  }

  // GET request to fetch data by ID
  // getDataById(id: number): Observable<any> {
  //   return this.http.get<any>(this.mainURL + id);
  // }

  // updateData(id: number, formData: any): Observable<any> {
  //   return this.http.put<any>(this.mainURL+'userlogin/' + id, formData);
  // }

}

// setToken(token: string) : void{
  //   localStorage.setItem('token', token);
  // }

  // getToken(): string | null{
  //   return localStorage.getItem('token');
  // }


// @Injectable({
//   providedIn: 'root',
// })

