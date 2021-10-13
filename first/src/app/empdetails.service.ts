import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmpdetailsService {
  urll='http://localhost:4500';
  constructor(private http:HttpClient) { }
  getdetail(){
    return this.http.get<any>(this.urll+'/api/empdetail')
  }
  adddetail(addemp:any){
    return this.http.post<any>(this.urll+'/api/empdetail',addemp)
  }
  deletedetail(id:any){
    return this.http.delete<any>(this.urll+`/api/empdetail/${id}`)
  }
  updatedetail(item:any){
        return this.http.put<any>(this.urll+`/api/empdetail/${item._id}`,item)
     }
     findbyname(_id:any){
return this.http.get<any>(this.urll+`/api/empdetail/?q=${_id}`)
//return this.http.get<any>(this.urll+`/api/empdetail/?_id=${_id}`)
     // return this.http.get<any>(this.urll+`/api/empdetail/?q=${firstname}`)
     }
  }

