'use client';
import useGetCalendarData from '@/queries/useGetCalendarData';
import { formatDate } from '@/utils/date';
import { useParams } from 'next/navigation';
import Calendar from 'react-calendar';

const TeamCalendar = () => {
  const params = useParams();
  const id = params.id as string;
  const { data: calendarData } = useGetCalendarData(id);

  return (
    <div className="max-w-screen-md mx-auto">
      <Calendar
        tileClassName={() => 'flex flex-col'}
        tileContent={({ activeStartDate, date, view }) => {
          for (let i = 0; i < calendarData.length; i++) {
            if (formatDate(date) === calendarData[i].date) {
              return (
                <div className=" text-red-500">{`${calendarData[i].opponent}팀 과의 경기`}</div>
              );
            }
          }
        }}
      ></Calendar>
    </div>
  );
};

export default TeamCalendar;
