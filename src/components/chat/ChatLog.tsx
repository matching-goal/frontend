import { ResChatBody, chatMessage } from '@/interface/chat';
import { formatDateAndTime } from '@/utils/date';
import { getImageOrDefault } from '@/utils/image';
import Image from 'next/image';
import { forwardRef } from 'react';

interface Props {
  chatLog: chatMessage[];
  memberId: string;
  receiverImg: string;
  memberImg: string;
}

const ChatLog = forwardRef<HTMLDivElement, Props>(
  ({ chatLog, memberId, receiverImg, memberImg }, ref) => {
    return (
      <ul className="h-[600px] overflow-y-scroll">
        {chatLog.map((chat) => (
          <li key={chat.createdDate}>
            <div
              className={`chat  ${
                memberId !== `${chat.memberId}` ? 'chat-start' : 'chat-end'
              }`}>
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <Image
                    width={80}
                    height={80}
                    alt="Tailwind CSS chat bubble component"
                    src={getImageOrDefault(
                      memberId !== `${chat.memberId}` ? receiverImg : memberImg
                    )}
                  />
                </div>
              </div>
              <div className="chat-header">
                {chat.nickname}
                <time className="text-xs opacity-50 ml-1">
                  {Array.isArray(chat.createdDate)
                    ? `${chat.createdDate[0]}-${chat.createdDate[1]}-${
                        chat.createdDate[2]
                      } ${chat.createdDate[3]
                        .toString()
                        .padStart(2, '0')}:${chat.createdDate[4]
                        .toString()
                        .padStart(2, '0')}`
                    : formatDateAndTime(new Date(chat.createdDate))}
                </time>
              </div>
              <div className="chat-bubble">{chat.message}</div>
            </div>
          </li>
        ))}
        <div ref={ref}></div>
      </ul>
    );
  }
);

ChatLog.displayName = 'ChatLog';

export default ChatLog;
