'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import API from '../api/api';
import { RequestMatching } from '@/interface/matching';

const useGetRequestMatching = (id: string) => {
  return useSuspenseQuery<RequestMatching[]>({
    queryFn: async () => (await API.get(`/api/matching/${id}/request-list`)).data,
    queryKey: ['requestMatchingList', id],
  });
};

export default useGetRequestMatching;
