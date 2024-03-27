import { useMutation, useQueryClient } from '@tanstack/react-query';
import API from '../../api/api';
import { RequestMatching } from '@/interface/matching';

const useAcceptMatching = (memberId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const res = await API.post(`/api/matching/${id}/accept`, {});
      return id;
    },
    onSuccess: (id) => {
      const requestMatchingList = queryClient.getQueryData<RequestMatching[]>([
        'requestMatchingList',
        memberId,
      ]);

      const newRequestMatchingList = requestMatchingList?.filter(
        (requestMatching) => requestMatching.id !== id
      );
      console.log(requestMatchingList, newRequestMatchingList);
      queryClient.setQueryData(['requestMatchingList', memberId], newRequestMatchingList);
      alert('매칭을 수락했습니다');
    },
    onError: () => {
      alert('에러');
    },
  });
};

export default useAcceptMatching;
