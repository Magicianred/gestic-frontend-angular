import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userList: any[];
  searchModel = { text: '', loading: false };
  pgntOpt = { pageSize: 15, currPage: 1, total: 0};

  constructor(private toastr: ToastrService,
              private userService: UserService,
              private _router: Router) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    // TODO: Remove mock data when API is implemented
    this.userList = [1, 2, 3];
    this.pgntOpt.total = 100;
  }

  redirectToUserDetails(userId) {
    this._router.navigate([`/home/user/${userId}`]);
  }

}
