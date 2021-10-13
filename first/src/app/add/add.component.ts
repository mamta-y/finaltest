import { Component, OnInit } from '@angular/core';
import { EmpdetailsService } from '../empdetails.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  error:any;
  message:any;
  constructor(private em:EmpdetailsService) { }

  ngOnInit(): void {
  }
  onFormSubmit(addForm:any){
    this.em.adddetail(addForm.value).subscribe(res=>{
      if(!res.error){
        addForm.reset();
        this.message="Employee  Added Successfully!!!"
      }else{
        this.error="Employee Not  Added "
      }
    },err =>{
      this.error="Server Error"
    })
  }
  }

