import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders, HttpResponse } from '@angular/common/http';

import { baseUrl } from 'src/environments/environment';
import { User } from './../user';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class JwtAuthService {
  constructor(private http: HttpClient , private router : Router) {}

  registerUser( userData : any){
    console.log(userData.firstName);
    return this.http.post<any>(`${baseUrl}users/register`, userData  ).subscribe(
        (response: any) =>{
          
            console.log(response);
            alert("you are now Registerd! welcome " + userData.firstName);
            this.router.navigate(['/login']);
        })
  }
  
  
   loginUser( userData :any){
    return this.http.post<any>(`${baseUrl}users/login`, userData).subscribe(
        (response: any) =>{
            console.log(response);
            this.setSession(response);
            this.router.navigate(['/task']);
        }
    )
  }

 


setSession(authResult:any) {
  console.log("INSIDE SET");
    console.log(authResult.token);
    localStorage.setItem('id_token', authResult.token);
}          

logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
}

 

// public isLoggedIn() {
//     return moment().isBefore(this.getExpiration());
// }

// isLoggedOut() {
//     return !this.isLoggedIn();
// }

// getExpiration() {
//     const expiration = localStorage.getItem("expires_at");
//     const expiresAt = JSON.parse(expiration);
//     return moment(expiresAt);
// }    
// }
   
}
