import {UserModel} from './user.model';

export class UserService {
  users = [
    new UserModel(1, 'Max'),
    new UserModel(2, 'Anna'),
    new UserModel(3, 'Chris')
  ];

  selectedUser: UserModel;
}
