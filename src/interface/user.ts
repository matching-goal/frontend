export interface User {
  email: string;
  password: string;
  name: string;
  nickname: string;
  region: string;
}

export interface CreateUser extends User {}

export interface UserInfo extends User {
  introduction: string;
  memberId: string;
  teamImg: string;
}

export interface LogInUser extends Pick<User, 'email' | 'password'> {}

export interface EditPassword {
  oldPassword: string;
  newPassword: string;
}
