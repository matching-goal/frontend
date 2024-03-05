interface User {
  email: string;
  password: string;
  name: string;
  nickname: string;
  region: string;
}

export interface CreateUser extends User {}

export interface UserInfo extends User {
  introduction: string;
  id: string;
  teamImg: string;
}
