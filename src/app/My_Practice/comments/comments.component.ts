import { Component, OnInit } from '@angular/core';
import { Comments } from 'src/app/Models/comments';
import { CommentsService } from 'src/app/Services/comments.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  comments: Comments[] = [];

  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {
    this.commentsService.getAllComments().subscribe((response: Comments[]) => {
      this.comments = response;
    });
  }
}