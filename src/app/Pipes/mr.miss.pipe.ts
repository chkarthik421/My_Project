import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mrMiss'
})
export class MrMissPipe implements PipeTransform {

 

    transform(lastname:string, gender:string) {

     
      
      if(gender == 'male')
      return "mr. "+lastname
    else
      return "ms. "+lastname
  }

}
