import { ErrorBoundary } from 'react-error-boundary';
import TeamProfile from './TeamProfile';
import { Suspense } from 'react';

const TeamProfileContainer = () => {
  return (
    <ErrorBoundary fallback={<div>팀 패치 에러</div>}>
      <Suspense fallback={<div>팀정보 불러오는중...</div>}>
        <TeamProfile></TeamProfile>
      </Suspense>
    </ErrorBoundary>
  );
};

export default TeamProfileContainer;
