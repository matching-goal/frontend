'use client';
import { useMutation } from '@tanstack/react-query';
import API from '../../api/api';

const useUploadImg = () => {
  return useMutation({
    mutationFn: (data: FormData) => API.post(`/api/images`, { data }),
    onSuccess: () => {},
  });
};

export default useUploadImg;
