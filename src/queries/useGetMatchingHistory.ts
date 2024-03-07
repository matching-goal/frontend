'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import API from '../api/api';
import { MatchingHistoryInfo } from '@/interface/matching';

const useGetMatchingHistory = (id: string) => {
  return useSuspenseQuery<MatchingHistoryInfo[]>({
    queryFn: async () => (await API.get(`/api/team/${id}/history`)).data,
    queryKey: ['matchingHistory', id],
  });
};

export default useGetMatchingHistory;
