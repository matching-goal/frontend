import useGetAlarm from '@/queries/useGetAlarm';
import Link from 'next/link';

interface Props {
  memberId: string;
}
const Alarm = ({ memberId }: Props) => {
  const { data: alarm } = useGetAlarm(memberId);
  console.log(alarm);
  return (
    <li>
      <Link href={`/team/editPassword`}>알람</Link>
    </li>
  );
};

export default Alarm;
