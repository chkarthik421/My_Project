import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  baseUrl="http://localhost:3000/user";
  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get(this.baseUrl);
  }
}
