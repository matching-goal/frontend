'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { ViewMatching } from '../interface/matching';
import API from '../api/api';

const useGetMatching = (id: string) => {
  return useSuspenseQuery<ViewMatching>({
    queryFn: async () => (await API.get(`/api/matching/${id}`)).data,
    queryKey: ['matching', id],
  });
};

export default useGetMatching;
