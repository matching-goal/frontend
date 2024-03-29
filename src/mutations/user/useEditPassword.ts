import { useMutation } from '@tanstack/react-query';
import API from '../../api/api';
import { useRouter } from 'next/navigation';
import { EditPassword } from '@/interface/user';

const useEditPassword = (memberId: string | undefined) => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: EditPassword) => {
      const res = await API.patch(`/api/members/password`, data);
      return res.data;
    },

    onSuccess: () => {
      alert('패스워드 변경 성공');
      router.push(`/team/${memberId}`);
    },
    onError: (e) => {
      alert(e.message);
    },
  });
};

export default useEditPassword;
