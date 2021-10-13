import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
error:any;
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  login(form:NgForm){
    this.auth.loginUser(form.value).subscribe(res=>{
      if(!res.error){
        console.log(res);
   localStorage.setItem("userDetails",JSON.stringify(res))
      this.router.navigate(['/display'])
   
      }else{
        this.error="Emplyoee Not LoggedIn"
      }
    },err=>{
      this.error="server error"
    })
  }
  
  
}
