import { useMutation, useQueryClient } from '@tanstack/react-query';
import API from '../../api/api';
import { CreateMatching } from '../../interface/matching';
import { useRouter } from 'next/navigation';

const useCreateMatching = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateMatching) => API.post(`/api/matching`, data),

    onSuccess: (data) => {
      queryClient.removeQueries({ queryKey: ['PreviewMatchingList'] });
      queryClient.setQueryData(['matching', data.data.id], data.data);
      router.push(`/matching/${data.data.id}`);
    },
  });
};

export default useCreateMatching;
