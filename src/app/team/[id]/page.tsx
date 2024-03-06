import TeamNav from '@/components/team/TeamNav';
import TeamProfileContainer from '@/components/team/teamProfile/TeamProfileContainer';

const page = () => {
  return (
    <article>
      <section>
        <TeamProfileContainer></TeamProfileContainer>
      </section>
      <section>
        <TeamNav></TeamNav>
      </section>
    </article>
  );
};

export default page;
