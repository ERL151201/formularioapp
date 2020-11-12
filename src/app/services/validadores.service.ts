import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  noRangel(control: FormControl): {[s:string]: boolean}{

    if (control.value?.toLowerCase() === 'rangel') {
      return{
        noRangel: true
      }
    }
    
    return null;
    

  }
}
