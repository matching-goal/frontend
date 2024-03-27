import { Suspense } from 'react';
import CreateMatchingContainer from '../../components/matching/CreateMatchingContainer';
import { ErrorBoundary } from 'react-error-boundary';

const page = () => {
  return (
    <section>
      <ErrorBoundary fallback={<div>에러</div>}>
        <Suspense>
          <CreateMatchingContainer />
        </Suspense>
      </ErrorBoundary>
    </section>
  );
};

export default page;
