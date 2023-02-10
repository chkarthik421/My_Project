import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmpServiceService } from 'src/app/Services/emp-service.service';
import { FormsModule }   from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-curd-oparation',
  templateUrl: './curd-oparation.component.html',
  styleUrls: ['./curd-oparation.component.css']
})
export class CURDOparationComponent {

  Employee:any;
  p: number = 1;
  searchText: string = '';

  employeeForm!: FormGroup;
  employeeModel:any;
  allEmployees:any;
  showAddBtn:boolean=true;
  showUpdateBtn:boolean=false;

  constructor(private api: EmpServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getAllEmployeeDetails();
    this.createEmployeeForm();
  }
  createEmployeeForm(){
    this.employeeForm = this.fb.group({
      empid:[''],
      fname:[''],
      lname:[''],
      gend:[''],
      sal:[''],
      dob:[''],
      email:[''],
      phoneno:['']
      
    });
  }

  getAllEmployeeDetails(){
    this.api.getAllEmployee().subscribe((res:any)=>{
      this.allEmployees = res;
      console.log(this.allEmployees)
    }, (err:any)=>{
      console.log(err);
      
    })
  }

  onAddClick(){
    this.showAddBtn=true;
    this.showUpdateBtn=false;
  }

  postEmployeeDetails(){
    this.employeeModel = Object.assign({}, this.employeeForm.value);

    this.api.postEmployee(this.employeeModel).subscribe((res:any)=>{
      // alert("Student Information added successfully");
      this.successMsg();
      let close = document.getElementById('close');
      close?.click();
      this.employeeForm.reset();
      this.getAllEmployeeDetails();
    }, (err:any)=>{
      alert("Error");
    })
  }

  deleteEmployeeDetail(id:any){
    this.api.deleteEmployee(id).subscribe((res:any)=>{
      // alert("Student information deleted successfully");
      this.deleteMsg();
      this.getAllEmployeeDetails();
    }, (err:any)=>{
      alert("Failed to delete student information");
    })
  }

  edit(emp:any){
    
    this.showAddBtn=false;
    this.showUpdateBtn=true;
    this.employeeForm.controls['empid'].setValue(emp.empid);
    this.employeeForm.controls['fname'].setValue(emp.fname);
    this.employeeForm.controls['lname'].setValue(emp.lname);
    this.employeeForm.controls['gend'].setValue(emp.gend);
    this.employeeForm.controls['sal'].setValue(emp.sal);
    this.employeeForm.controls['dob'].setValue(emp.dob);
    this.employeeForm.controls['email'].setValue(emp.email);
    this.employeeForm.controls['phoneno'].setValue(emp.phoneno);
    
  }

  updateStudentDetails(){
    this.employeeModel = Object.assign({}, this.employeeForm.value);

    this.api.updateEmployee(this.employeeModel, this.employeeModel.Emp_Id).subscribe((res:any)=>{
      alert("Student information updated successfully");
      let close = document.getElementById('close');
      close?.click();
      this.getAllEmployeeDetails();
      this.employeeForm.reset();
      this.employeeModel={};
    }, (err:any)=>{
      alert("Error in updating student information");
    })
  }

  reset(){
    this.employeeForm.reset();
    this.employeeModel={};
  }
//-----------------------------------------------------------------------------------------------//
   
/////////////---------------Alert Messages-------------------------/////////////////////////////
  successMsg() {
    Swal.fire('Congratulations!', 'Employee Added Successfully...', 'success');
  }
  deleteMsg() {
    Swal.fire('Congratulations!', 'Employee Deleted Successfully...', 'error');
  }
////----------------------------------------------------------------------------///////


/////////////---------------Sorting Methods-------------------------/////////////////////////////
  asec() {

            this.allEmployees.sort((a:any, b:any) => a.empid - b.empid);
        }

  dsec() {
          this.allEmployees.sort((a:any, b:any) => b.empid - a.empid);
        }    
////----------------------------------------------------------------------------///////




     
}
