import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  constructor(private http: HttpClient) { }

  baseUrl : string = "http://localhost:3000";

  postEmployee(data:any){
    
    return this.http.post<any>(this.baseUrl+'/posts', data);
  }


  getAllEmployee(){
    return this.http.get<any>(this.baseUrl+'/posts');
  }

  deleteEmployee(id:any){
    return this.http.delete<any>(this.baseUrl+'/posts/'+ id);
  }

  updateEmployee(data:any, id:number){
    return this.http.put<any>(this.baseUrl+'/posts/'+id, data);
  }

 
}
