import TeamNav from '@/components/team/TeamNav';
import TeamProfileContainer from '@/components/team/teamProfile/TeamProfileContainer';

import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const page = () => {
  return (
    <article className="min-h-screen">
      <ErrorBoundary fallback={<div>유저 정보 에러</div>}>
        <section>
          <TeamProfileContainer />
        </section>
        <section className="mt-20">
          <TeamNav></TeamNav>
        </section>
      </ErrorBoundary>
    </article>
  );
};

export default page;
