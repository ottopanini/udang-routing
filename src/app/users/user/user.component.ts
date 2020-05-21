import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.selectedUserChanged.subscribe((user) => this.user = user);
    this.user = this.userService.selectedUser;
  }
}
