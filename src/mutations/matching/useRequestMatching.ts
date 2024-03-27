'use client';
import { useMutation } from '@tanstack/react-query';
import API from '../../api/api';

const useRequestMatching = () => {
  return useMutation({
    mutationFn: async (data: { id: string; memberId: string }) => {
      const res = await API.post(`/api/matching/${data.id}/request`, {});
      return res.data;
    },
    onSuccess: () => {
      alert('신청 완료~');
    },
    onError: (e) => {
      alert(e.message);
    },
  });
};

export default useRequestMatching;
