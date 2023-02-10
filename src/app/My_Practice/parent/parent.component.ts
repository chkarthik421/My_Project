import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  // a: any;
  // b: any;
  // x: any;
  // add(a: any, b: any) {
  //   this.x = a + b;
  // }
  // iText: any;

  // receiveName(text: string) {
  //   this.iText = text;
  // }
  // //==================================================================//

  // //=================For Child-01==============//

  // ch1text: string = '';
  // ch1num: number = 0;
  // ch1selecttext: string = '';
  // ch1checkboxtext: string = '';

  // //=================For Child-02==============//

  // ch2text: string = '';
  // ch2num: number = 0;
  // ch2selecttext: string = '';
  // ch2checkboxtext: string = '';

  // //=================From Child-01==============//


  // child1Text: string = '';
  // child1Num: number = 0;
  // ch1SelectText: string = '';
  // ch1CheckboxText: string = '';
  // text: string = '';
  // num: number = 0;
  // text1: string = '';
  // text2: string = '';
  // child2Text:string='';
  // receiveText(text:string) {
  //   this.child1Text = this.text;
  // }
  // receiveChild2(text:string){
  //   this.child2Text=this.text;
  // }
  // receiveNum(num:number) {
  //   this.child1Num = this.num;
  // }
  // receiveSelectText(text1:string) {
  //   this.ch1SelectText = this.text1;
  // }
  // receiveCheckboxText(text2:string) {
  //   this.ch1CheckboxText = this.text2;
  // }
myNumber:number=25;

get counter(){
  return this.myNumber;
}
set counter(value){
  this.myNumber=value;
}
increment(){
  this.counter++;
}
decrement(){
  this.counter--;
}
}
