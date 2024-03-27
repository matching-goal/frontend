import AlarmModal from '@/components/alarmModal/AlarmModal';
import { User } from '@/interface/next-auth';
import useGetAlarm from '@/queries/useGetAlarm';
import { Suspense } from 'react';

interface Props {
  user: User;
}

const Alarm = ({ user }: Props) => {
  const { data: alarms = [] } = useGetAlarm(user.memberId);
  const alarmFilterCount = alarms.filter((alarm) => alarm.checkedOut === 0).length;
  return (
    <Suspense>
      <div className=" relative">
        {alarmFilterCount > 0 && (
          <div className=" absolute z-50 -right-4 -top-2 pr-2 pl-2 h-4 bg-red-500 rounded-full flex justify-center items-center">
            <p className=" font-sans">{alarmFilterCount}</p>
          </div>
        )}
        <AlarmModal
          alarms={alarms}
          memberId={user.memberId}
        />
      </div>
    </Suspense>
  );
};

export default Alarm;
