import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Employee } from '../Models/employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  constructor(private httpClient: HttpClient) {}
 
  getEmployees():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>("http://localhost:3000/posts").pipe(map((response:Employee[])=>{
      return response.map((emp:Employee)=>{
        return new Employee(emp.Emp_Id,emp.First_Name,emp.Last_Name,emp.Phone_Number,emp.Village);
        console.log(Employee);
        
      })
    }));
  }
 
}


 





