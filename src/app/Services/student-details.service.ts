import { Injectable } from '@angular/core';
import { StudentAddService } from './student-add.service';

@Injectable({
  providedIn: 'root'
})
export class StudentDetailsService {
  private studentDetails=[
    {id:101,name:"karthik",course:"html",edu:"B.Tech"},
    {id:102,name:"mounika",course:"css",edu:"B.A"},
    {id:103,name:"sindhu",course:"JavaScript",edu:"B.Sc"},
    {id:104,name:"pavani",course:"Angular",edu:"B.Sc"},
    {id:105,name:"manoj",course:"react",edu:"B.Com"}
    ];

    allAdd:any;
    student:any;
    studentAllDetails: any;
    constructor(private strDet:StudentAddService) {
                                                    const allAdd = this.strDet.getAllAdd();
                                                    this.studentAllDetails = this.studentAllDetails.map((student:any)=>{
                                                                                                                          const addObj = allAdd.find((add:any)=>student.id===add.id);
                                                                                                                          student.address=addObj?.address;
                                                                                                                          return student;

                                                                                                                        })
                                                                    console.log(this.studentAllDetails);
                                                                    
                                                }

 getAllStrDetails(){
   return this.studentAllDetails;
 }
 getFilterStrDetails(name:any){
   return this.studentAllDetails.filter((student: { name: any; }) => student.name === name);

   
 }

}
