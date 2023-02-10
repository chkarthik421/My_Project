import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css'],
  inputs:['add','iText','ch1text','ch1num','ch1selecttext','ch1checkboxtext','myNumber'],
  outputs:['dataEvent']
})
export class ChildOneComponent {

//   name:string="Karthik";

//   a:any;
//   b:any;
//   add:any;
//   x:any;
// iText:any;

// //=======From Parent======//
// ch1text:string='';
// ch1num:number=0;
// ch1selecttext:string='';
// ch1checkboxtext:string='';

// //=======To Parent======//
// parentText:string='';
// parentNum:number=0;
// parentSelectText:string='';
// parentCheckboxText:string='';
// text:string='';
// num:number=0;
// text1:string='';
// text2:string='';

// dataEvent = new EventEmitter();

// sendText(){
//   this.dataEvent.emit(this.parentText);
// }
// sendNum(num:number){
//   this.dataEvent.emit(this.parentNum); 
// }
// sendSelectText(text1:string){
//   this.dataEvent.emit(this.parentSelectText);
// }
// sendCheckboxText(text2:string){
//   this.dataEvent.emit(this.parentCheckboxText);
// }
//======================================================================//

myNumber:number=0;
}
