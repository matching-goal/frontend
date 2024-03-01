import { useMutation, useQueryClient } from '@tanstack/react-query';
import API from '../../api/api';
import { useNavigate } from 'react-router-dom';

const useDeleteMatching = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => API.delete(`/api/matching/${id}`),

    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ['PreviewMatchingList'] });
      navigate('/matching');
    },
  });
};

export default useDeleteMatching;
