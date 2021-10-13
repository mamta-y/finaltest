import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { EmpdetailsService } from '../empdetails.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  items:any;
  error:any;
message:any;
selectedToEdit:any;
itemUpdating=false;
_id:any;
i:any;
firstname:any;
  constructor(private em:EmpdetailsService,public auth:AuthService) { }
  
  ngOnInit(): void {
    this.em.getdetail().subscribe(data =>{
      this.items = data;
     });
  }



  onEdit(item:any){
    this.selectedToEdit={...item}
    console.log(this.selectedToEdit);
  }
  onFormSubmit(){
    this.itemUpdating=true;
    this.em.updatedetail(this.selectedToEdit).subscribe(res=>{
      if(!res.error){
        this.itemUpdating=false;
        this.message="Employee Detail updated successfully"
        this.items.splice(this.items.findIndex((ele: { _id: any; })=>ele._id===res.response._id),1,res.response)
      }
      else{
        this.error="Employee Detail not updated"
      }
    },err=>{
      this.error="server error"
    
     
    })
  }

empdelete(item:any){
  const confirmation = confirm("Are You Sure you want to Delete  ??")
  if(confirmation){
  this.em.deletedetail(item._id).subscribe(res=>{
    if(!res.error){
   console.log(res);
this.items.splice(this.items.indexOf(item),1)
this.message="Employee deleted successfully"
}
else{
this.error="Employee not deleted"
}
 },err=>{
   this.error="server error"
 })
}

}

searchbyname(){
  this.i=-1;
  this.items=undefined;
  this.em.findbyname(this._id).subscribe(res=>{
    console.log(res)
    if(!res.error){
      console.log(res);
    this.items=res;
     console.log(res);
   this.message="Employee  found"
 }
 else{
    this.error="Employee not found"
 }
  
},err=>{
  this.error="server error"
})
}
}

// searchbyname(){
//   this.em.findbyname(this._id).subscribe(res=>{
//     console.log(res);
//     if(!res.error){
//       this.items=res.items;
//       console.log(res.items);
//     }
//     else{
//       this.error="some prblm occured"
//     }
//       },err=>{
//         this.error="server error"
//       })
//     }
// }
// searchbyname(): void {
//   this.em.findbyname(this.firstname)
//     .subscribe(
//       res => {
//         this.items = res;
//         console.log(res);
//       },
//       error => {
//         console.log(error);
//       });
// }
// }

