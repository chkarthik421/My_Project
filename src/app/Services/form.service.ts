import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormModel } from '../Models/form-model';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  baseUrl="http://localhost:3000/users";
  
  constructor(private http:HttpClient) { }

  postUsers(formModel: FormModel){
    return this.http.post<any>(this.baseUrl,formModel);
  }
}
