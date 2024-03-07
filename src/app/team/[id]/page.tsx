import TeamNav from '@/components/team/TeamNav';
import TeamProfileContainer from '@/components/team/teamProfile/TeamProfileContainer';

const page = () => {
  return (
    <article>
      <section>
        <TeamProfileContainer></TeamProfileContainer>
      </section>
      <section className="mt-20">
        <TeamNav></TeamNav>
      </section>
    </article>
  );
};

export default page;
