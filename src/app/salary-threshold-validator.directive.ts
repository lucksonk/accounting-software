import { Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl, Validator, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appSalaryThresholdValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: SalaryThresholdValidatorDirective, multi: true}]
})
export class SalaryThresholdValidatorDirective implements Validator {

  constructor() { }

  validate(c: FormControl): ValidationErrors {
    const numValue = Number(c.value);

    const isValid = this.validateSalary(numValue);
    const message = {
      'msg': {
        'message': 'must be a valid number between '
      }
    };
    return isValid ? null : message;
  }

  validateSalary(salary) {
    const thresholdUpperRange = 1000000;
    if (!isNaN(salary) && salary > 0 && !isNaN(salary) && salary <= thresholdUpperRange) {
      return true;
    }
    return false;
  }


}
