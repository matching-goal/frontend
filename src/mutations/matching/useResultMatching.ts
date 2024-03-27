import { useMutation, useQueryClient } from '@tanstack/react-query';
import API from '../../api/api';
import { RequestMatching, ResultData } from '@/interface/matching';

const useResultMatching = (memberId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: { id: string; data: ResultData }) => {
      const res = await API.post(`/api/game/${data.id}/result`, data.data);
      return data.id;
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
      alert('매칭 결과 작성 성공');
    },
    onError: (e) => {
      alert(e.message);
    },
  });
};

export default useResultMatching;
