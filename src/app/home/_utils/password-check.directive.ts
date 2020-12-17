import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[clpPasswordCheck]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordCheckDirective,
    multi: true
  }]
})
export class PasswordCheckDirective implements Validator {
  @Input() clpPasswordCheck: string;

  validate(control: AbstractControl): { [key: string]: any } | null {
    return (control.value !== this.clpPasswordCheck) ? { doesNotMatch: true } : null;
  }
}
