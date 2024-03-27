import { useMutation, useQueryClient } from '@tanstack/react-query';
import API from '../../api/api';
import { Alarm } from '@/interface/alarm';

const useReadAlarm = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: { alarmIdList: number[] }) => API.patch(`/api/alarm/check`, data),
    onSuccess: () => {
      const alarms = queryClient.getQueryData<Alarm[]>(['alarms', id]);
      console.log(alarms);
      if (!alarms) return;

      const newAlarm = alarms.map((alarm) => {
        return { ...alarm, checkedOut: 1 };
      });
      console.log(newAlarm, id);

      queryClient.setQueryData(['alarms', id], newAlarm);
    },
  });
};

export default useReadAlarm;
