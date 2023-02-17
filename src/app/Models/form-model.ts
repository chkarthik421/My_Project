import { Time } from "@angular/common";

export class FormModel {
    constructor(
    //              public firstName:string,
    //             public lastName:string,
    //             public gender:string,
    //             public dateOfBirth:string,
    //             public dateOfTime:number,
    //             public habbits:string,
                    public name:string,
                    public email:string,
                    public course:string
                )   {
                    // this.firstName=firstName;
                    // this.lastName=lastName;
                    // this.gender=gender;
                    // this.dateOfBirth=dateOfBirth;
                    // this.dateOfTime=dateOfTime;
                    // this.habbits=habbits;
                    this.name=name;
                    this.email=email;

                }
}
