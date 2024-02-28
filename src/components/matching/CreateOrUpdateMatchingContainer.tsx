import { useParams } from 'react-router-dom';

const CreateOrUpdateMatchingContainer = () => {
  const params = useParams();
  const id = params.id as 'create' | 'update';

  return (
    <article className="mt-32 max-w-screen-md mx-auto">
      <section>
        <button></button>
      </section>
      <section>
        <h1 className="text-3xl"></h1>
      </section>

      <section className="min-h-[450px] mt-3">
        <p></p>
      </section>
      <section className="flex justify-between items-center">
        <div>
          <p className="mb-4"></p>
          <p></p>
        </div>
        <div>
          <button className="w-[130px] h-[30px] border rounded-2xl border-black mr-4">
            1:1 채팅
          </button>
          <button className="w-[130px] h-[30px] border rounded-2xl border-black">
            매칭 신청
          </button>
        </div>
      </section>
    </article>
  );
};

export default CreateOrUpdateMatchingContainer;
