'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { ResponsePreviewMatchingList } from '../interface/matching';
import API from '../api/api';

const useGetMatchingList = (query: string) => {
  return useSuspenseQuery<ResponsePreviewMatchingList>({
    queryFn: async () => (await API.get(`/api/matching/list?${query}`)).data,
    queryKey: ['PreviewMatchingList', query],
  });
};

export default useGetMatchingList;
