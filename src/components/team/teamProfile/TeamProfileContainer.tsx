import UserProfileSkeleton from '@/components/skeleton/UserProfileSkeleton';
import TeamProfile from './TeamProfile';
import { Suspense } from 'react';

const TeamProfileContainer = () => {
  return (
    <Suspense fallback={<UserProfileSkeleton />}>
      <TeamProfile></TeamProfile>
    </Suspense>
  );
};

export default TeamProfileContainer;
