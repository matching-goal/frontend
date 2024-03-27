'use client';
import { useMutation } from '@tanstack/react-query';
import API from '../../api/api';
import axios from 'axios';
import BASE_API_URL from '@/constants/url';

const useUploadImg = () => {
  return useMutation({
    mutationFn: (data: FormData) =>
      axios.post(
        `${BASE_API_URL}/api/images/upload`,
        { data },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      ),
    onSuccess: () => {},
  });
};

export default useUploadImg;
