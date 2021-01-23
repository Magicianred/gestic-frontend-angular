import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Group } from '../../_models/group';
import { GroupService } from '../../_services/group.service';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})
export class GroupDetailsComponent implements OnInit {
  groupId: string;
  groupModel: Group;

  constructor(private activatedRoute: ActivatedRoute,
              private groupService: GroupService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.groupId = params.get('groupId');

      if (this.groupId) {
        this.groupService.getClassGroupById(this.groupId)
          .subscribe(newGroup => {
            this.groupModel = newGroup;
          });
      }
    });
  }

}
