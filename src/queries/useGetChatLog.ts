'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import API from '../api/api';
import { ResChatBody } from '@/interface/chat';

const useGetChatLog = (id: string) => {
  return useSuspenseQuery<ResChatBody>({
    queryFn: async () => (await API.get(`/api/chat/${id}`)).data,
    queryKey: ['chatLog', id],
  });
};

export default useGetChatLog;
