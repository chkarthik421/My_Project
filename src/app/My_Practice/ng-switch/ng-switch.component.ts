import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent {

flag:boolean=false;
dayNumber=new Date().getDay();

alphabet='B';

crrTime=new Date().toLocaleTimeString();

}
