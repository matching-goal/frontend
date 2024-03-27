'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import API from '../../api/api';
import { AxiosError } from 'axios';
import { ResponseDataType } from '@/interface/error';
import { useSession } from 'next-auth/react';

interface EditUser {
  introduction?: string;
  nickname?: string;
  imageUrl?: string;
}

const useEditUser = (id: string) => {
  const session = useSession();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: EditUser) => {
      const res = await API.patch(`/api/members/mypage`, data);
      return data;
    },
    onSuccess: (data) => {
      session.update({ nickname: data.nickname, imageUrl: data.imageUrl });
      const user = queryClient.getQueryData<EditUser>(['team', id]);
      const newUser = { ...user, ...data };
      queryClient.setQueryData(['team', id], newUser);
      alert('변경 성공');
    },
    onError: (e: AxiosError<ResponseDataType>) => {
      alert(e.message);
    },
  });
};

export default useEditUser;
