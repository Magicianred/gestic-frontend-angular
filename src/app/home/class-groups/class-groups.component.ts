import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupService } from '../_services/group.service';
import { Group } from '../_models/group';


@Component({
  selector: 'app-class-groups',
  templateUrl: './class-groups.component.html',
  styleUrls: ['./class-groups.component.scss']
})
export class ClassGroupsComponent implements OnInit {
  groupsList: Group[] = [];

  constructor(private router: Router,
              private groupService: GroupService) { }

  ngOnInit(): void {
    this.groupService.getClassGroups()
      .subscribe(listOfGroups => {
        this.groupsList = listOfGroups;
      });
  }

  goToGroupDetails(groupItem): void {
    this.router.navigate([ 'home', 'class-groups', groupItem.id ]);
  }

}
