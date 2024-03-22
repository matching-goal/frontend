import { UserInfo } from './user';

export interface ResChatBody extends Pick<UserInfo, 'nickname' | 'memberId'> {
  chatRoomId: string;
  message: string;
  createdDate: string;
  readYn: 0 | 1;
}
