const UserProfileSkeleton = () => {
  return (
    <div className="flex justify-center flex-col items-center  min-h-[404px]">
      <div className="skeleton w-32 h-14"></div>
      <div className="skeleton w-52 h-52 rounded-full mt-5"></div>
      <div className="skeleton max-w-screen-md w-full h-16 mt-7"></div>
    </div>
  );
};

export default UserProfileSkeleton;
