import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message:any;
  error:any;
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }
  onregister(form:NgForm){
    
    this.auth.registerUser(form.value).subscribe(res=>{
      if(!res.error){
        form.reset();
        this.message="Emplyoee Registered Successfully!!!"
      }
      else{
        this.error="Emplyoee Not Registered"
      }
    },err=>{
      console.log(err);
      this.error="server error"
    })
  }
  }

