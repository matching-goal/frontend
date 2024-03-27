import { useSearchParams } from 'next/navigation';
import MatchingCard from './MatchingCard';
import useGetMatchingList from '@/queries/useGetMatchingList';
import { useEffect, useRef } from 'react';

interface Props {
  query: string;
}

const MatchingList = ({ query }: Props) => {
  const params = useSearchParams();
  const keyword = params.get('keyword');
  const newQuery = keyword
    ? `${query}${keyword && `&keyword=${keyword}`}&type=title`
    : `${query}`;
  const {
    data: InfinityQueryResponseMatchingList,
    fetchNextPage,
    hasNextPage,
    isLoading,
  } = useGetMatchingList(newQuery);

  const matchingList = InfinityQueryResponseMatchingList.pages
    .map((page) => page.content)
    .flat();
  const infinityScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollRef = infinityScrollRef.current;
    const options = {
      root: null,
      threshold: 0.5,
    };

    const fetchCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasNextPage) {
          fetchNextPage();
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(fetchCallback, options);
    if (scrollRef) {
      observer.observe(scrollRef);
    }

    return () => {
      if (scrollRef) {
        observer.unobserve(scrollRef);
      }
    };
  }, [fetchNextPage, hasNextPage, matchingList]);

  return (
    <div className="">
      <ul className="grid grid-cols-3 gap-3">
        {matchingList.map((matching) => (
          <MatchingCard
            key={matching.id}
            matching={matching}></MatchingCard>
        ))}
        <div ref={infinityScrollRef}></div>
      </ul>
    </div>
  );
};

export default MatchingList;
