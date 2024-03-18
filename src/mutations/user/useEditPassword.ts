import { useMutation } from '@tanstack/react-query';
import API from '../../api/api';
import { useRouter } from 'next/navigation';
import { EditPassword, LogInUser } from '@/interface/user';

const useEditPassword = (memberId: string | undefined) => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: EditPassword) => API.patch(`/api/members/password`, data),

    onSuccess: () => {
      alert('패스워드 변경 성공');
      router.push(`/team/${memberId}`);
    },
    onError: (e) => {
      alert(`에러 발생 ${e}`);
    },
  });
};

export default useEditPassword;
