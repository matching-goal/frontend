'use client';
import useGetChatList from '@/queries/useGetChatList';
import { openChat } from '@/utils/chat';

interface Props {
  memberId: string;
}

const ChatList = ({ memberId }: Props) => {
  const { data: chatList = [] } = useGetChatList(memberId);
  return (
    <ul className="flex flex-col items-center">
      {chatList.map((chat) => {
        const guest = chat.memberList.filter(
          (member) => `${member.memberId}` !== memberId
        )[0];
        return (
          <li
            key={chat.id}
            className="card w-96 bg-neutral text-neutral-content mb-5">
            <div className="card-body items-center text-center">
              <h2 className="card-title">{`${guest.memberNickname} 님 과의 채팅`} </h2>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    openChat(chat.id);
                  }}>
                  이동하기
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ChatList;
