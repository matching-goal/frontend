import Link from 'next/link';

const Main = () => {
  return (
    <div
      className="hero min-h-screen p-0"
      style={{
        backgroundImage: 'url(/title.jpg)',
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Matching Goal에 어서오세요</h1>
          <p className="mb-5">누구나 편하게 매칭을 신청하고 잡을수 있습니다.</p>
          <Link
            href={'/matchingList'}
            className="btn btn-primary">
            시작하기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
