'use client';

import { useQuery } from '@tanstack/react-query';
import API from '../api/api';
import { Alarm } from '@/interface/alarm';

const useGetAlarm = (id: string | undefined) => {
  return useQuery<Alarm[]>({
    queryFn: async () => (await API.get(`/api/alarm/`)).data,
    queryKey: ['alarms', id],
  });
};

export default useGetAlarm;
