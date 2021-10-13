import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LeaveService } from '../leave.service';

@Component({
  selector: 'app-displayleave',
  templateUrl: './displayleave.component.html',
  styleUrls: ['./displayleave.component.css']
})
export class DisplayleaveComponent implements OnInit {
leav:any;
data:any;
leave:any;
message:any;
error:any;
selectedToEdit:any;
itemUpdating=false;
err:any;

  constructor(private la:LeaveService,public auth:AuthService) { }

  ngOnInit(): void {
    this.la.getleave().subscribe((data: any) =>{
      this.leav = data;
     });
  }



  onEdit(leave:any){
    this.selectedToEdit={...leave}
    console.log(this.selectedToEdit);
  }
  // onFormSubmit(){
  //   this.itemUpdating=true;
  //   this.la.updatedetail(this.selectedToEdit).subscribe((res: { error: any; response: { _id: any; }; })=>{
  //     if(!res.error){
  //       this.itemUpdating=false;
  //       this.message=" Detail updated successfully"
  //       this.leav.splice(this.leav.findIndex((ele: { _id: any; })=>ele._id===res.response._id),1,res.response)
  //     }
  //     else{
  //       this.error=" Detail not updated"
  //     }
  //   },()=>{
  //     this.error="server error"
    
     
  //   })
  // }
  onFormSubmit(){
    this.itemUpdating=true;
    this.la.updatedetail(this.selectedToEdit).subscribe(res=>{
      if(!res.error){
        this.itemUpdating=false;
           this.message=" Detail updated successfully"
           this.leav.splice(this.leav.findIndex((ele: { _id: any; })=> ele._id===res.response._id),1,res.response)
      }
      else{
        this.error=" Detail not updated"
      }
    
    }, err=>{
      this.error="server error"
    })
  }
  deleting(leave:any){
    console.log('leave',leave);
    const confirmation = confirm("Are You Sure you want to Delete  ??")
    if(confirmation){
    this.la.deleteleave(leave._id).subscribe(res=>{
      if(!res.error){
     console.log(res);
  this.leav.splice(this.leav.indexOf(leave),1)
  this.message=" deleted successfully"
  }
  else{
  this.error=" not deleted"
  }
   },err=>{
     this.error="server error"
   })
    }}}

