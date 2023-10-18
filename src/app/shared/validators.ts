import { AbstractControl, ValidationErrors } from '@angular/forms';

export function checkboxRequired(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (Object.keys(value).some((key) => value[key])) return null;
  return { required: true };
}
