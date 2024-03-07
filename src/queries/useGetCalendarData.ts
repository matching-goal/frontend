'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import API from '../api/api';
import { MatchingDateInfo } from '@/interface/calendar';

const useGetCalendarData = (id: string) => {
  return useSuspenseQuery<MatchingDateInfo>({
    queryFn: async () => (await API.get(`/api/matching/${id}`)).data,
    queryKey: ['matching', id],
  });
};

export default useGetCalendarData;
