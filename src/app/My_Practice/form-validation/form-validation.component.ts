import { Component } from '@angular/core';
import { FormModel } from 'src/app/Models/form-model';
import { FormService } from 'src/app/Services/form.service';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent {

  constructor(private formService:FormService){}
  formModel= new FormModel("karthik","chkarthik421@gmail.com","default");
  courseHasError:boolean=true;
  
 
  validCourse(value:any){
    if(value === 'default'){
      this.courseHasError=true;
    }else{
      this.courseHasError=false;
    }
  }
  onSubmit(formModel:FormModel){
    this.formService.postUsers(this.formModel).subscribe(data=>console.log("success",data),
    error=>console.error("Error!",error));
    
}
}
