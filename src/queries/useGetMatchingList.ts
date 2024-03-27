'use client';

import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { ResponsePreviewMatchingList } from '../interface/matching';
import API from '../api/api';

const useGetMatchingList = (query: string) => {
  return useSuspenseInfiniteQuery<ResponsePreviewMatchingList>({
    queryFn: async ({ pageParam }) => {
      const res = await API.get(`/api/matching/list?${query}&size=9&page=${pageParam}`);
      return res.data;
    },
    queryKey: ['PreviewMatchingList', query],
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.totalPages > lastPage.pageable.pageNumber
        ? lastPage.pageable.pageNumber + 1
        : undefined;
    },
  });
};

export default useGetMatchingList;
