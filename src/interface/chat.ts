import { UserInfo } from './user';

export interface ResChatBody {
  chatRoomMemberInfo: ChatRoomMemberInfo[];
  chatMessageList: chatMessage[];
}

export interface ChatRoomMemberInfo extends Pick<UserInfo, 'memberId'> {
  memberNickname: string;
  memberImgUrl: string;
}

export interface chatMessage extends Pick<UserInfo, 'nickname' | 'memberId'> {
  chatRoomId: string;
  message: string;
  createdDate: string;
  receiverId: string;
  readYn: 0 | 1;
}

export interface ChatRoomInfo {
  id: string;
  matchingBoardId: string;
  closedYn: 0 | 1;
  memberList: ChatRoomMemberInfo[];
}
