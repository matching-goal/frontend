import { useMutation } from '@tanstack/react-query';
import API from '../../api/api';

import { useRouter } from 'next/navigation';
import { CreateUser } from '@/interface/user';

const useRegisterUser = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: CreateUser) => API.post(`/api/auth/sign-up`, data),

    onSuccess: () => {
      alert('회원가입에 성공하셨습니다,');
      router.push(`/`);
    },
    onError: (e) => {
      alert(`에러 발생 ${e}`);
    },
  });
};

export default useRegisterUser;
