import Calendar from 'react-calendar';

const TeamCalendar = () => {
  return (
    <div className="max-w-screen-md mx-auto">
      <Calendar
        tileClassName={() => 'flex flex-col'}
        tileContent={({ activeStartDate, date, view }) => {
          return <div className="">asdasdf</div>;
        }}
      ></Calendar>
    </div>
  );
};

export default TeamCalendar;
