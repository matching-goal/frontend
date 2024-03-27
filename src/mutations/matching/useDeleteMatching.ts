'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import API from '../../api/api';
import { useRouter } from 'next/navigation';
import { AxiosError } from 'axios';
import { ResponseDataType } from '@/interface/error';

const useDeleteMatching = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const res = await API.delete(`/api/matching/${id}`);
      return res.data;
    },

    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ['PreviewMatchingList'] });
      router.push('/matchingList');
    },
    onError: (e: AxiosError<ResponseDataType>) => {
      alert(e.message);
    },
  });
};

export default useDeleteMatching;
