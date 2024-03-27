import { useMutation } from '@tanstack/react-query';
import API from '../../api/api';
import { openChat } from '@/utils/chat';

const useCreateChatRoom = () => {
  return useMutation({
    mutationFn: (data: { guestId: string; matchingBoardId: number }) =>
      API.post(`/api/chat/personal`, data),
    onSuccess: (data) => {
      openChat(data.data);
    },
  });
};

export default useCreateChatRoom;
