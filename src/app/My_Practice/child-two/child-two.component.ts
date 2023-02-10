import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css'],
  inputs:['ch2text','ch2num','ch2selecttext','ch2checkboxtext'],
  outputs:['nameEvent','textEvent']
})
export class ChildTwoComponent {
text:string='';
text1:string='';

nameEvent= new EventEmitter();
textEvent = new EventEmitter();

toParent(){
  this.nameEvent.emit(this.text);
}
toParentText(){
  this.textEvent.emit(this.text1);
}

//=======From Parent======//
ch2text:string='';
ch2num:number=0;
ch2selecttext:string='';
ch2checkboxtext:string='';

}
