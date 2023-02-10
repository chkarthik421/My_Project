import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentAddService {
   studentAdd = [
    {id:101,address:"prp"},
    {id:102,address:"basaru"},
    {id:103,address:"plkd"},
    {id:104,address:"vizag"},
    {id:105,address:"nkr"}	   
    ];
  constructor() { }

  getAllAdd(){
    return this.studentAdd;
  }
}
