import { useMutation, useQueryClient } from '@tanstack/react-query';
import API from '../../api/api';
import { RequestMatching } from '@/interface/matching';

const useRefuseMatching = (memberId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const res = await API.post(`/api/matching/${id}/refuse`, {});
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
      alert('매칭이 거절되었습니다');
    },
    onError: () => {
      alert('에러');
    },
  });
};

export default useRefuseMatching;
