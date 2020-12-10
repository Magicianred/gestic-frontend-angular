import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-active-projects',
  templateUrl: './active-projects.component.html',
  styleUrls: ['./active-projects.component.scss']
})
export class ActiveProjectsComponent implements OnInit {
  activeProjectsList: {
    _id: string;
    name: string;
    creationDate: Date;
  }[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.activeProjectsList = [
      {
        _id: '123',
        name: 'MusIC',
        creationDate: new Date()
      },
      {
        _id: '456',
        name: 'SEComP',
        creationDate: new Date()
      },
      {
        _id: '789',
        name: 'Katie',
        creationDate: new Date()
      }
    ]
  }

  goToProjectDetails(projectItem): void {
    this.router.navigate([ 'home','active-projects', projectItem._id ])
  }

}
