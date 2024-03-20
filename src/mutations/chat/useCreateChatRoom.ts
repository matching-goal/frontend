import { useMutation } from '@tanstack/react-query';
import API from '../../api/api';
import { UserInfo } from '@/interface/user';

const useCreateChatRoom = () => {
  return useMutation({
    mutationFn: (data: Pick<UserInfo, 'memberId'>) =>
      API.post(`/api/chat/personal`, data),
    onSuccess: (data) => {
      window.open(`/chat/${data.data}`, '_blank', 'width=483,height=635');
    },
  });
};

export default useCreateChatRoom;
