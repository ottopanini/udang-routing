import {User} from './user';
import {EventEmitter} from '@angular/core';

export class UserService {
  private _users = [
    new User(1, 'Max'),
    new User(2, 'Anna'),
    new User(3, 'Chris')
  ];

  private _selectedUser: User;

  public selectedUserChanged: EventEmitter<User> = new EventEmitter<User>();

  get selectedUser() {
    return this._selectedUser;
  }

  setSelectedUser(index: number) {
    this._selectedUser = this._users[index];
    this.selectedUserChanged.emit(this.selectedUser);
  }

  get users() {
    return [...this._users];
  }

  getById(id: number) {
    return this._users.find(user => user.id === id);
  }
}
