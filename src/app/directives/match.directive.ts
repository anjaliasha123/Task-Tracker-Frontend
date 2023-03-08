import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[match]'
})
export class MatchDirective implements Validator {

  constructor() { }
  validate(group: AbstractControl<any, any>): ValidationErrors{
    let errors: any[] = [];
    if(group.value.password !== group.value.confirmPassword){
      errors.push({
        'matchingError': true
      });
    }
    return errors;
  }

}
