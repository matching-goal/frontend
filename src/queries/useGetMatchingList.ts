import { useSuspenseQuery } from '@tanstack/react-query';
import { PreviewMatching } from '../interface/matching';
import API from '../api/api';

const useGetMatchingList = () => {
  return useSuspenseQuery<PreviewMatching[]>({
    queryFn: async () => await API.get(`/api/matching/list`),
    queryKey: ['PreviewMatchingList'],
  });
};

export default useGetMatchingList;
