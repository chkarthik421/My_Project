export class Employee {
    Emp_Id: number;
    First_Name: string;
    Last_Name: string;
    Phone_Number: number;
    Village: string; 
 
   constructor(Emp_Id: number, First_Name: string, Last_Name: string, Phone_Number: number, Village : string) {
     this.Emp_Id = Emp_Id;
     this.First_Name = First_Name;
     this.Last_Name = Last_Name;
     this.Phone_Number = Phone_Number;
     this.Village = Village;
   }
   getFullName(): string {
     return `${this.First_Name} ${this.Last_Name} `;
   }
   
 }
