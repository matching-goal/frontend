import { useMutation, useQueryClient } from '@tanstack/react-query';
import API from '../../api/api';
import { useNavigate } from 'react-router-dom';
import { PatchMatching, ViewMatching } from '../../interface/matching';
import { AxiosResponse } from 'axios';

interface Parameter {
  data: PatchMatching;
  id: string;
}

const usePatchMatching = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ data, id }: Parameter) => API.patch(`/api/matching/${id}`, data),

    onSuccess: (req: AxiosResponse<ViewMatching>) => {
      queryClient.setQueryData(['matching', req.data.id], req.data);
      navigate(`/matching/${req.data.id}`);
    },
  });
};

export default usePatchMatching;
