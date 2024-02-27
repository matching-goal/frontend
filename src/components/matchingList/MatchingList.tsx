import { useState } from 'react';
import useGetMatchingList from '../../queries/useGetMatchingList';
import MatchingCard from './MatchingCard';
import { matchingSortList } from '../../constants/sort';

const MatchingList = () => {
  const [sort, setSort] = useState(matchingSortList[0]);
  const { data: matchingList, isError } = useGetMatchingList();
  if (isError) {
    return <div>데이터 패칭중 에러 발생</div>;
  }
  const handleSortBtnClick = (matchingSort: {
    name: string;
    key: string;
    type: string;
  }) => {
    setSort(matchingSort);
    const elem = document.activeElement as HTMLElement;

    if (elem) {
      elem?.blur();
    }
  };
  return (
    <div>
      <div className="dropdown">
        <label tabIndex={0} className="btn m-1">
          {sort.name}
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52"
        >
          {matchingSortList.map((matchingSort) => (
            <li
              key={matchingSort.name}
              onClick={() => {
                handleSortBtnClick(matchingSort);
              }}
            >
              <span>{matchingSort.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {matchingList.map((matching) => (
          <MatchingCard key={matching.id} matching={matching}></MatchingCard>
        ))}
      </div>
    </div>
  );
};

export default MatchingList;
