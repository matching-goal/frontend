import { useMutation, useQueryClient } from '@tanstack/react-query';
import API from '../../api/api';
import { useNavigate } from 'react-router-dom';
import { CreateMatching } from '../../interface/matching';

const useCreateMatching = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateMatching) => API.post(`/api/matching`, data),

    onSuccess: (data) => {
      queryClient.removeQueries({ queryKey: ['PreviewMatchingList'] });
      queryClient.setQueryData(['matching', data.data.id], data.data);
      navigate(`/matching/${data.data.id}`);
    },
  });
};

export default useCreateMatching;
