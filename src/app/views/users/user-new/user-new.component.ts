import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { User } from "../../../models/user";
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.sass']
})
export class UserNewComponent implements OnInit {

  constructor(private userService: UsersService,
              private router: Router) { }

  ngOnInit() {
  }

  save (user: User) {
    this.userService.add(user);
    this.router.navigate(['/users']);
  }

}
