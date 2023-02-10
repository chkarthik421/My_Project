import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
                    // myForm:any;
                    // firstName:string='';
                    // lastName:string='';
                    // gender:string='';
                    // dob:string='';
                    // bofTime:string='';
                    // habbits:string='';
      user = {
                firstName: '',
                lastName: '',
                gender:'',
                dob:'',
                bot:'',
                habbits:'',
                email: '',
                phnumber:'',
                address: {
                  street: '',
                  city: '',
                  pin: '',
        }
}
submitMyForm(myForm: NgForm) {
  console.log(myForm);
}
}
