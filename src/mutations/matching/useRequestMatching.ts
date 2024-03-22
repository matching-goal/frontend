'use client';
import { useMutation } from '@tanstack/react-query';
import API from '../../api/api';

const useRequestMatching = () => {
  return useMutation({
    mutationFn: (data: { id: string; memberId: string }) =>
      API.post(`/api/matching/${data.id}/request/${data.memberId}`, {}),
    onSuccess: () => {},
  });
};

export default useRequestMatching;
