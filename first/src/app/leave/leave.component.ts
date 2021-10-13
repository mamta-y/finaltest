import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LeaveService } from '../leave.service';


@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {
  error:any;
  message:any;
  res:any;
  err:any;
  ValidationErrors:any;
  form: any;
  constructor(private la:LeaveService ,public auth:AuthService) {
    
   }

  ngOnInit(): void {
  
  }
leave(leaveform:any){
this.la.addleave(leaveform.value).subscribe((res: { error: any; })=>{
  if(!res.error){
    leaveform.reset();
    this.message="Leave  Added Successfully!!!"
  }else{
    this.error="Leave Not  Added "
  }
},(err: any) =>{
  this.error="Server Error"
})
}

}




