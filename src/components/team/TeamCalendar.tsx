'use client';
import useGetCalendarData from '@/queries/useGetCalendarData';
import { formatDate } from '@/utils/date';
import { useParams } from 'next/navigation';
import Calendar from 'react-calendar';
import { useRef, useState } from 'react';
import useResultMatching from '@/mutations/matching/useResultMatching';
import { ResultData } from '@/interface/matching';

const date = formatDate(new Date()).split('-');
const todayYear = +date[0];
const todayMonth = +date[1];

const TeamCalendar = () => {
  const params = useParams();
  const id = params.id as string;

  const [year, setYear] = useState(todayYear);
  const [month, setMonth] = useState(todayMonth);
  const [currentGameId, setCurrentGameId] = useState('');

  const { data: calendarData } = useGetCalendarData(id, year, month);

  const dialogRef = useRef<HTMLDialogElement>(null);

  const [resultData, setResultData] = useState<ResultData>({
    score1: 0,
    score2: 0,
    duration: 0,
  });

  const resultMatchingMutation = useResultMatching();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResultData({
      ...resultData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-screen-md mx-auto">
      <Calendar
        onChange={(e) => {
          const s = e?.valueOf() as number;
          const date = new Date(s);
          for (let i = 0; i < calendarData.length; i++) {
            if (formatDate(date) === calendarData[i].date) {
              setCurrentGameId(`${calendarData[i].gameId}`);
              dialogRef.current?.showModal();
            }
          }
        }}
        onActiveStartDateChange={(e) => {
          if (!e.activeStartDate) {
            return;
          }
          const date = formatDate(e.activeStartDate);
          const [newYear, newMonth] = date.split('-');

          setYear(+newYear);
          setMonth(+newMonth);
        }}
        tileClassName={() => 'flex flex-col'}
        tileContent={({ date }) => {
          for (let i = 0; i < calendarData.length; i++) {
            if (formatDate(date) === calendarData[i].date) {
              return (
                <div className=" text-xs">
                  {`${calendarData[i].opponentNickname}팀 과의 경기`}
                </div>
              );
            }
          }
        }}></Calendar>
      <>
        <dialog
          id="my_modal_3"
          ref={dialogRef}
          className="modal">
          <div className="modal-box">
            <form
              className=" card border-gray-300 border-2"
              onSubmit={(e) => {
                e.preventDefault();
                resultMatchingMutation.mutate({ id: currentGameId, data: resultData });
                dialogRef.current?.close();
              }}>
              <div className="card-body">
                <h3 className=" card-title text-2xl mb-5">경기 결과 입력</h3>
                <div>
                  <div className="flex justify-between">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">1팀 점수</span>
                      </div>
                      <input
                        name="score1"
                        type="number"
                        className="input input-bordered w-full"
                        defaultValue={resultData.score1}
                        onChange={handleChange}
                        required
                      />
                    </label>
                  </div>
                  <div className="flex justify-between">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">2팀 점수</span>
                      </div>
                      <input
                        name="score2"
                        type="number"
                        className="input input-bordered w-full"
                        defaultValue={resultData.score2}
                        onChange={handleChange}
                        required
                      />
                    </label>
                  </div>
                  <div className="flex justify-between">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">경기 시간(분단위)</span>
                      </div>
                      <input
                        name="duration"
                        type="number"
                        className="input input-bordered w-full"
                        defaultValue={resultData.duration}
                        onChange={handleChange}
                        required
                      />
                    </label>
                  </div>
                </div>
                <div className="card-actions items-center mt-5">
                  <button
                    type="submit"
                    className="btn btn-active btn-neutral rounded-3xl text-xl">
                    제출
                  </button>
                </div>
              </div>
            </form>
          </div>
          <form
            method="dialog"
            className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </>
    </div>
  );
};

export default TeamCalendar;
