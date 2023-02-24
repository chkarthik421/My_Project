import { Component } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { nameValidator } from 'src/app/Shared/name_validator';
import { PasswordValidator } from 'src/app/Shared/password.validator';





@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

    // myForm = new FormGroup({
    //   userName: new FormControl(''),
    //   password: new FormControl(''),
    //   confirmPassword: new FormControl(''),
    
    //   address : new FormGroup({
    //                               village: new FormControl(''),
    //                               town: new FormControl(''),
    //                               district: new FormControl(''),
    //                               state: new FormControl(''),
    //                               pincode: new FormControl('')
    //                           })
    // })

    constructor(private _FB: FormBuilder) {}
    get userName(){
      return this.myForm.get('userName')
    }
    myForm = this._FB.group({
      userName:['',[Validators.required,Validators.minLength(5),nameValidator(/password/)]],
      password: [''],
      confirmPassword: [''],
      address : this._FB.group({
        village:[''],
        town: [''],
        district: [''],
        state: [''],
        pincode: ['']
      })
    },{Validators:PasswordValidator});
}