import { useSuspenseQuery } from '@tanstack/react-query';
import API from '@/api/api';
import { ChatRoomInfo } from '@/interface/chat';

const useGetChatList = (id: string) => {
  return useSuspenseQuery<ChatRoomInfo[]>({
    queryFn: async () => {
      try {
        const res = await API.get(`/api/chat/list`);
        return res.data;
      } catch (e) {}
    },
    queryKey: ['chatList', id],
  });
};

export default useGetChatList;
