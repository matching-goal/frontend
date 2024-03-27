import useAcceptMatching from '@/mutations/matching/useAcceptMatching';
import useRefuseMatching from '@/mutations/matching/useRefuseMatching';
import useGetRequestMatching from '@/queries/useGetRequestMatchingList';

interface Props {
  memberId: string;
}

const RequestMatchingList = ({ memberId }: Props) => {
  const { data: requestMatchingList = [] } = useGetRequestMatching(memberId);
  const acceptMatchingMutation = useAcceptMatching(memberId);
  const refuseMatchingMutation = useRefuseMatching(memberId);

  return (
    <ul className=" flex flex-col items-center">
      {requestMatchingList.map((requestMatching) => (
        <li
          key={requestMatching.id}
          className="card w-96 bg-neutral text-neutral-content mb-5">
          <div className="card-body items-center text-center">
            <h2 className="card-title">{`${requestMatching.nickname}님의 매칭 신청`}</h2>
            <p>매칭을 수락 하시겠습니까?</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => {
                  acceptMatchingMutation.mutate(requestMatching.id);
                }}>
                수락
              </button>
              <button
                className="btn btn-ghost bg-red-500 hover:bg-red-500"
                onClick={() => {
                  refuseMatchingMutation.mutate(requestMatching.id);
                }}>
                거절
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default RequestMatchingList;
