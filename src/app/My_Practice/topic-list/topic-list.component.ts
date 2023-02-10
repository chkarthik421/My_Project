import { Component } from '@angular/core';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent {

  public topicList = [
    { "id":1,"name":"Data_Binding"},
    { "id":2,"name":"View_Encapsulation"},
    { "id":3,"name":"Directives"},
    { "id":4,"name":"JSON Data Read"},
    { "id":5,"name":"Ng-Template"},
    { "id":6,"name":"Ng-Container"},
    { "id":7,"name":"Ng-Content"},
    { "id":8,"name":"Angular Pipes"},
    { "id":9,"name":"Component Communication"},
    { "id":10,"name":"LifeCycle Hooks"},
    { "id":11,"name":"Angular Services"},
    { "id":12,"name":"HTTP Methods"}
  ]
}
