import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../../_services/project.service';
import { ToastrService } from 'ngx-toastr';
import { Project } from '../../_models/project';


@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  projectRegisterForm: FormGroup;
  isSubmittingForm = false;
  get fCtrls() {
    return this.projectRegisterForm.controls;
  }

  constructor(private fb: FormBuilder,
              private projectService: ProjectService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    // Creating reactive form
    this.projectRegisterForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      userId: ['', Validators.required],
    });
  }

  submitRegisterForm(): void {
    this.isSubmittingForm = true;

    const projectPayload = new Project();
    projectPayload.name = this.fCtrls.name.value;
    projectPayload.description = this.fCtrls.description.value;
    projectPayload.userId = this.fCtrls.userId.value;

    this.projectService.createNewProject(projectPayload)
      .subscribe((newProject) => {
        this.isSubmittingForm = false;
        this.toastr.success('Projeto criado com sucesso!');
      }, errResponse => {
        this.isSubmittingForm = false;
        this.toastr.error('Ocorreu um erro');
      });
  }

}
