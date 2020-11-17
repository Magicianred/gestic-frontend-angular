import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/user';
import { SessionService } from '../../../_services/session.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  accountModel: User = SessionService.getUser();

  constructor(private userService: UserService,
              private modalService: NgbModal) { }

}
