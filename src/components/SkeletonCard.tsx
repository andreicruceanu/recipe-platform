const SkeletonCard = () => {
  return (
    <div className="animate-pulse flex flex-col h-full w-full rounded-2xl shadow-md p-2 md:p-4">
      <div className="bg-gray-300 h-[100px]  md:h-[180px] lg:h-[170px] rounded-2xl"></div>
      <div className="mt-4 space-y-2">
        <div className="bg-gray-300 h-4 w-3/4 rounded"></div>
        <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex space-x-2">
          <div className="bg-gray-300 h-4 w-16 rounded"></div>
          <div className="bg-gray-300 h-4 w-16 rounded"></div>
        </div>
        <div className="bg-gray-300 hidden md:block h-4 w-10 rounded"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
