import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GroupService } from '../../_services/group.service';
import { ToastrService } from 'ngx-toastr';
import { Group } from '../../_models/group';


@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {
  groupRegisterForm: FormGroup;
  isSubmittingForm = false;
  get fCtrls() {
    return this.groupRegisterForm.controls;
  }

  constructor(private fb: FormBuilder,
              private groupService: GroupService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    // Creating reactive form
    this.groupRegisterForm = this.fb.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
      codeClassroom: ['', Validators.required],
      linkClassroom: ['', Validators.required],
      linkMeets: ['', Validators.required],
      linkWpp: ['', Validators.required],
      linkTel: ['', Validators.required],
    });
  }

  submitRegisterForm(): void {
    this.isSubmittingForm = true;

    const groupPayload = new Group();
    groupPayload.name = this.fCtrls.name.value;
    groupPayload.code = this.fCtrls.code.value;
    groupPayload.codeClassroom = this.fCtrls.codeClassroom.value;
    groupPayload.linkClassroom = this.fCtrls.linkClassroom.value;
    groupPayload.linkMeets = this.fCtrls.linkMeets.value;
    groupPayload.linkWpp = this.fCtrls.linkWpp.value;
    groupPayload.linkTel = this.fCtrls.linkTel.value;

    this.groupService.createNewGroup(groupPayload)
      .subscribe((newGroup) => {
        this.isSubmittingForm = false;
        this.toastr.success('Grupo criado com sucesso!');
      }, errResponse => {
        this.isSubmittingForm = false;
        this.toastr.error('Ocorreu um erro');
      });
  }

}
