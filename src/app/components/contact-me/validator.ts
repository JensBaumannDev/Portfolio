import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function forbiddenNameValidator(name: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value == name ? { forbiddenName: { value: control.value } } : null;
  };
}
