import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormModel } from 'src/app/Models/form-model';

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
Sports:string='';
Reading:string='';
Singing:string='';
Watching:string='';
// formModel = new FormModel("chebodula","karthik","male","08/06/1990",10,"cricket");
}
