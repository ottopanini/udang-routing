import {Component, OnInit} from '@angular/core';
import {User} from './user';
import {UserService} from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.users;
  }

  onSelectUser(index: number) {
    this.userService.setSelectedUser(index);
  }
}
