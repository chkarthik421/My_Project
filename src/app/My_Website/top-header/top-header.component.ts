import { Component } from '@angular/core';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent {


  today: number = Date.now();
  constructor() {
    setInterval(() => {this.today = Date.now()}, 1);
} 
}
