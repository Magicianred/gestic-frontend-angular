import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-projects',
  templateUrl: './active-projects.component.html',
  styleUrls: ['./active-projects.component.scss']
})
export class ActiveProjectsComponent implements OnInit {
  activeProjectsList: {
    name: string;
    creationDate: Date;
  }[] = [];

  constructor() { }

  ngOnInit(): void {
    this.activeProjectsList = [
      {
        name: 'MusIC',
        creationDate: new Date()
      },
      {
        name: 'SEComP',
        creationDate: new Date()
      },
      {
        name: 'Katie',
        creationDate: new Date()
      }
    ]
  }

}
