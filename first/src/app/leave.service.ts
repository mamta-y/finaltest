import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
urll="http://localhost:4500";
  constructor(private http:HttpClient) { }
  getleave(){
    return this.http.get<any>(this.urll+'/api/leave')
  }

  addleave(add:any){
    return this.http.post<any>(this.urll+'/api/leave',add)
  }
  deleteleave(id:any){
      return this.http.delete<any>(this.urll+`/api/leave/${id}`)
    }
    updatedetail(leave:any){
      return this.http.put<any>(this.urll+`/api/empdetail/${leave._id}`,leave)
   }
  }

