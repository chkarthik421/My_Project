import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
firstName:string='';
lastName:string='';
gender:string='';
dob:string='';
bofTime:string='';
habbits:string='';

}
