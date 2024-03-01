import { Suspense } from 'react';
import UpdateMatchingContainer from '../../components/matching/UpdateMatchingContainer';
import { ErrorBoundary } from 'react-error-boundary';

const UpdateMatchingPage = () => {
  return (
    <ErrorBoundary fallback={<div>정상적이지 않은 접근입니다</div>}>
      <Suspense fallback={<div>로딩중</div>}>
        <UpdateMatchingContainer></UpdateMatchingContainer>
      </Suspense>
    </ErrorBoundary>
  );
};

export default UpdateMatchingPage;
