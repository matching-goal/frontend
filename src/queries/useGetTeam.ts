'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import API from '../api/api';
import { UserInfo } from '@/interface/user';

const useGetTeam = (id: string) => {
  return useSuspenseQuery<UserInfo>({
    queryFn: async () => (await API.get(`/api/members/${id}`)).data,
    queryKey: ['team', id],
  });
};

export default useGetTeam;
