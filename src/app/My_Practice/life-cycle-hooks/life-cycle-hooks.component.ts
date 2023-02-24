import { Component } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent {
  constructor() {
    console.log('This is constructor');
  };
  ngOnChanges() {
    console.log('This is ngOnChanges');
  };
  ngOnInit() {
    console.log('This is ngOnInit');
  };
  // ngDoCheck() {
  //   console.log('This is ngDoCheck');
  // }
  ngAfterContentInit() {
    console.log('This is ngAfterContentInit');
  };
  // ngAfterContentChecked() {
  //   console.log('This is ngAfterContentChecked'); 
  // };
  ngAfterViewInit() {
console.log('This is ngAfterViewInit'); 
  }; 
  // ngAfterViewChecked() {
  //   console.log('This is ngAfterViewChecked');
  // };
  ngOnDestroy() {
    console.log('This is ngOnDestroy');
  }; 
  


}
