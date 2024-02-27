import { Link } from 'react-router-dom';
import useGetMatchingList from '../../queries/useGetMatchingList';

const MatchingList = () => {
  const { data: matchingList, isError } = useGetMatchingList();
  if (isError) {
    return <div>데이터 패칭중 에러 발생</div>;
  }
  return (
    <div className="grid grid-cols-3 gap-3">
      {matchingList.map((matching) => (
        <article key={matching.id} className=" w-[223px] h-[330px] ">
          <Link to={`/matching/${matching.id}`}>
            <div className="">
              <figure className="w-full">
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="rounded-xl h-[223px]"
                />
              </figure>

              <div className="">
                <h2 className="">
                  {matching.title.length > 11
                    ? matching.title.slice(0, 14) + '...'
                    : matching.title}
                </h2>
                <p className=" text-xs">{matching.stadium}</p>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default MatchingList;
