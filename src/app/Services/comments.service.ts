import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comments } from '../Models/comments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private httpClient:HttpClient) { }

  getAllComments(): Observable<Comments[]> {
    return this.httpClient.get<Comments[]>(
      'https://jsonplaceholder.typicode.com/comments'
    );
  }
  
}
