import { useMutation } from '@tanstack/react-query';
import API from '../../api/api';
import { useRouter } from 'next/navigation';
import { LogInUser } from '@/interface/user';

const useLogInUser = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: LogInUser) => API.post(`/api/auth/signIn`, data),

    onSuccess: () => {
      alert('로그인에 성공하셨습니다,');
      router.push(`/`);
    },
    onError: (e) => {
      alert(`에러 발생 ${e}`);
    },
  });
};

export default useLogInUser;
