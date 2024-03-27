'use client';

import { Alarm } from '@/interface/alarm';
import useReadAlarm from '@/mutations/alarm/useReadAlarm';
import { openChat } from '@/utils/chat';
import { formatDateAndTime } from '@/utils/date';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

interface Props {
  alarms: Alarm[] | undefined;
  memberId: string;
}

const AlarmModal = ({ alarms, memberId }: Props) => {
  const readAlarmMutation = useReadAlarm(memberId);
  const modalRef = useRef<HTMLDialogElement>(null);
  if (alarms === undefined) {
    return (
      <button onClick={() => modalRef.current?.showModal()}>
        <Image
          className=" cursor-pointer mb-1"
          src={'/alarm.png'}
          alt="알람"
          width={30}
          height={30}></Image>
      </button>
    );
  }

  return (
    <div>
      <button
        onClick={() => {
          const filterAlarm = alarms?.filter((alarm) => alarm.checkedOut === 0);
          const alarmIdList = filterAlarm.map((alarm) => +alarm.id);
          modalRef.current?.showModal();
          readAlarmMutation.mutate({
            alarmIdList: alarmIdList,
          });
        }}>
        <Image
          className=" cursor-pointer mb-1"
          src={'/alarm.png'}
          alt="알람"
          width={30}
          height={30}></Image>
      </button>

      <dialog
        id="my_modal_5"
        ref={modalRef}
        className="modal">
        <div className="modal-box max-h-96">
          <h3 className="font-bold text-lg">알람 목록</h3>
          <section>
            <ul>
              {alarms.map((alarm) => {
                if (alarm.checkedOut === 1) {
                  return;
                }
                if (alarm.type === 'NEW_MATCHING_REQUEST') {
                  return (
                    <Link
                      onClick={() => modalRef.current?.close()}
                      href={'/requestMatchingList'}
                      key={alarm.id}
                      className="card w-full bg-base-100 shadow-xl border-b border-gray-300">
                      <div className="card-body  ">
                        <h2 className="card-title text-base">{alarm.message}</h2>
                        <p className="text-sm">{`${formatDateAndTime(
                          new Date(alarm.createdDate)
                        )} 새로운 매칭 신청이 왔습니다.`}</p>
                      </div>
                    </Link>
                  );
                }
                if (alarm.type === 'MATCHING_REQUEST_ACCEPTED') {
                  return (
                    <div
                      key={alarm.id}
                      className="card w-full bg-base-100 shadow-xl border-b border-gray-300">
                      <div className="card-body  ">
                        <h2 className="card-title text-base">{alarm.message}</h2>
                        <p className="text-sm">{`${formatDateAndTime(
                          new Date(alarm.createdDate)
                        )} `}</p>
                      </div>
                    </div>
                  );
                }
                if (alarm.type === 'CHAT') {
                  return (
                    <div
                      key={alarm.id}
                      className="card w-full bg-base-100 shadow-xl">
                      <div className="card-body border-b border-gray-300">
                        <h2 className="card-title text-base">{alarm.message}</h2>
                        <p className="text-sm">{`${formatDateAndTime(
                          new Date(alarm.createdDate)
                        )} 새로운 채팅이 도착했습니다.`}</p>
                        <div className=" card-actions justify-end">
                          <button
                            className="btn"
                            onClick={() => {
                              openChat(alarm.contentId);
                            }}>
                            이동하기
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </ul>
          </section>
        </div>
        <form
          method="dialog"
          className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default AlarmModal;
