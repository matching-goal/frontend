'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import API from '../../api/api';
import { useRouter } from 'next/navigation';

const useDeleteMatching = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => API.delete(`/api/matching/${id}`),

    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ['PreviewMatchingList'] });
      router.push('/matchingList');
    },
  });
};

export default useDeleteMatching;
