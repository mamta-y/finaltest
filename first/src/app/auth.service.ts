import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseurl="http://localhost:4500";
  constructor(private http:HttpClient,private route:Router) { }
  registerUser(userDetails:any){
    console.log(userDetails);
   return this.http.post<any>(this.baseurl+'/api/register',userDetails)
  }
  loginUser(credentials:any){
    return this.http.post<any>(this.baseurl+'/api/login',credentials)
      }
      getUserDetails() {
        const userDetails = JSON.parse(localStorage.getItem('userDetails') ||"{}")
        if(userDetails){
          return userDetails
        }
      }
      isLoggedIn() {
        const userDetails = this.getUserDetails();
        return userDetails ? true : false
      }
    
      logout() {
        localStorage.clear();
        this.route.navigateByUrl('/login')
      }
    
      isAdmin() {
        const userDetails = this.getUserDetails();
        return userDetails && userDetails.role === 'admin' ? true : false;
      }
    
      isUser() {
        const userDetails = this.getUserDetails();
        return userDetails && userDetails.role === 'user' ? true : false;
      }
    
}
