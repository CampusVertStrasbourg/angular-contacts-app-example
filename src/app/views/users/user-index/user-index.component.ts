import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { User } from "../../../models/user";

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.sass']
})
export class UserIndexComponent implements OnInit {

  users: User[];

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.users = this.userService.index();
    console.log(this.users);
  }

}
