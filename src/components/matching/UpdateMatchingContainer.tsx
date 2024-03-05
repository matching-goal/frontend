'use client';
import { useParams } from 'next/navigation';
import useGetMatching from '../../queries/useGetMatching';
import CreateOrUpdateMatching from './CreateOrUpdateMatching';

const UpdateMatchingContainer = () => {
  const params = useParams();
  const id = params.id as string;
  const { data: matching } = useGetMatching(id);
  return (
    <article className="mt-20 max-w-screen-md mx-auto ">
      <CreateOrUpdateMatching matching={matching}></CreateOrUpdateMatching>
    </article>
  );
};

export default UpdateMatchingContainer;
