import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../_utils/custom-validators';
import { User } from '../_models/user';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  userRegisterForm: FormGroup;
  isSubmittingForm = false;
  get fCtrls() {
    return this.userRegisterForm.controls;
  }
  get tempPassword() {
    return this.userRegisterForm.get('password').value;
  }
  get passwordConfirmationDoesNotMatch(): boolean {
    const passErrors = this.userRegisterForm.get('confirmPassword').errors;
    return passErrors ? passErrors.doesNotMatch : false;
  }

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    // Creating reactive form
    this.userRegisterForm = this.fb.group({
      name: ['', [Validators.required, CustomValidators.isValidFullName()]],
      cpf: ['', [Validators.required, CustomValidators.isValidCpf()]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      tag: ['ALUN', Validators.required],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  updatePasswordValidity() {
    this.userRegisterForm.get('confirmPassword').updateValueAndValidity();
  }

  submitRegisterForm(): void {
    this.isSubmittingForm = true;

    let userPayload = new User();
    userPayload.name = this.fCtrls.name.value;
    userPayload.cpf = this.fCtrls.cpf.value;
    userPayload.email = this.fCtrls.email.value;
    userPayload.password = this.fCtrls.password.value;
    userPayload.tag = this.fCtrls.tag.value;

    this.userService.createNewUser(userPayload)
      .subscribe((newUser) => {
        this.isSubmittingForm = false;
        this.toastr.success('Usuário criado com sucesso!');
      }, errResponse => {
        this.isSubmittingForm = false;
        this.toastr.error('Ocorreu um erro');
      })
  }

}
