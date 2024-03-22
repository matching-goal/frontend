'use client';

import { useQuery } from '@tanstack/react-query';
import API from '../api/api';
import { alarm } from '@/interface/alarm';

const useGetAlarm = (id: string) => {
  return useQuery<alarm[]>({
    queryFn: async () => (await API.get(`/api/alarm/`)).data,
    queryKey: ['alarm', id],
  });
};

export default useGetAlarm;
