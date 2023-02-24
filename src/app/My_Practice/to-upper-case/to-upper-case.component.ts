import { Component } from '@angular/core';
import { Comments } from 'src/app/Models/comments';
import { CommentsService } from 'src/app/Services/comments.service';

@Component({
  selector: 'app-to-upper-case',
  templateUrl: './to-upper-case.component.html',
  styleUrls: ['./to-upper-case.component.css']
})
export class ToUpperCaseComponent {
  
  comments: Comments[] = [];
  newComments: Comments[] = [];
  constructor(private commentsService: CommentsService) {}
  ngOnInit(): void {
    this.commentsService.getAllComments().subscribe((response: Comments[]) => {
      this.comments=response;
      // this.comments=response.map(
			// 			  obj => Object.fromEntries(
			// 				Object.entries(obj)
			// 				  .map(([key, val]) => 
							       
			// 								[key,(val[0].toUpperCase()+val[1].toLowerCase()+val[2].toUpperCase()+val.slice(3))]
			// 								)
			// 			  )
			// 			);
    });
  }
 





 
  
    
 
}
