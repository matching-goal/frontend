'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { MatchingSimpleHistory } from '../interface/matching';
import API from '../api/api';

const useGetMatchingSimpleHistory = (id: string) => {
  return useSuspenseQuery<MatchingSimpleHistory>({
    queryFn: async () => {
      return (await API.get(`/api/members/${id}/simple-history`)).data;
    },
    queryKey: ['PreviewMatchingList', id],
  });
};

export default useGetMatchingSimpleHistory;
