interface User {
  email: string;
  password: string;
  name: string;
  nickName: string;
  region: string;
}

export interface CreateUser extends User {}

export interface UserInfo extends User {
  introduction: string;
  id: string;
}
