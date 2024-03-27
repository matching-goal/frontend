'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import API from '../api/api';
import { MatchingDateInfo } from '@/interface/calendar';

const useGetCalendarData = (id: string, year: number, month: number) => {
  return useSuspenseQuery<MatchingDateInfo[]>({
    queryFn: async () =>
      (await API.get(`/api/members/${id}/calendar?year=${year}&month=${month}`)).data,
    queryKey: ['calendar', [id, year, month]],
  });
};

export default useGetCalendarData;
