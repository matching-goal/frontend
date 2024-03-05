'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { PreviewMatching } from '../interface/matching';
import API from '../api/api';

const useGetMatchingList = (query: string) => {
  return useSuspenseQuery<PreviewMatching[]>({
    queryFn: async () => await API.get(`/api/matching/list?${query}`),
    queryKey: ['PreviewMatchingList', query],
  });
};

export default useGetMatchingList;
