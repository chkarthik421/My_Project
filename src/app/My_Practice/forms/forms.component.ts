import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormModel } from 'src/app/Models/form-model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
// firstName:string='';
// lastName:string='';
// gender:string='';
// dob:string='';
// bofTime:string='';
// habbits:string='';
// Sports:string='';
// Reading:string='';
// Singing:string='';
// Watching:string='';
// formModel = new FormModel("chebodula","karthik","male","08/06/1990",10,"cricket");
registerForm = new FormGroup({
  firstname: new FormControl(),
  lastname: new FormControl(),
  address: new FormGroup({
    street: new FormControl(),
    zip: new FormControl(),
    city: new FormControl()
  })
});
}
