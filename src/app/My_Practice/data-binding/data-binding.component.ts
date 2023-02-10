import { Component,ViewChild ,ViewEncapsulation } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class DataBindingComponent {

  ///////Interpolation and Property Binding /////////
  myText: string = 'Karthik';
  imagePath : string="./assets/chebodula.jpg";

  isDisabled: boolean = false;

  name: string = 'Karthik';

  a:number=24;
  b:number=18;

  flag:boolean = false;
  f1(){
    alert("I am f1")
  }

  

  add(num1:any,num2:any){
    alert(Number(num1)+Number(num2));
  }
  //flag:boolean = true;
  myClasses = {
    class1 : true,
    class2 : false,
    class3 : true
  } 
  myFunction(){
    return this.myClasses;
  }

  num:number=6;

  myStyles = {
    'background-color': 'lime',
    'font-size': '20px',
    'border': '5px dotted red',
    'padding':'20px'
}
myFunction1(){
  return this.myStyles;
}

 //flag:boolean=false;
  fun1(){
    this.flag=!this.flag;
  }
   
 public n:any=prompt("Enter Your Number:");
}


