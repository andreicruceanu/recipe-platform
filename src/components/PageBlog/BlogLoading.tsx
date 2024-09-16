import Container from "../Container";
import { Skeleton } from "../ui";

const BlogLoading = () => {
  return (
    <Container className="mt-6">
      <Skeleton className="w-14 h-3" />
      <Skeleton className="w-24 h-5 mt-7" />
      <div className="mt-16 p-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-9">
          <div className="order-2 md:order-1 flex flex-col ">
            <Skeleton className="w-full h-6 mt-6 mb-20" />

            <Skeleton className="w-full h-4 mb-5" />
            <Skeleton className="w-full h-4 mb-5" />
            <Skeleton className="w-full h-4 mb-5" />
            <Skeleton className="w-full h-4 mb-5" />
            <Skeleton className="w-full h-4 mb-5" />
            <Skeleton className="w-full h-4 mb-5" />
            <div className="mt-auto">
              <Skeleton className="mt-8 w-28 h-10" />
            </div>
          </div>
          <div className="w-12/12 order-1 md:order-2">
            <Skeleton className="w-full h-[500px] rounded-lg" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mt-24">
        {Array.from({ length: 3 }).map((_, index) => {
          return (
            <div key={index} className="animate-pulse h-[400px] ">
              <div className="animate-pulse flex flex-col w-full p-0">
                <Skeleton className="rounded-t-md w-full h-48" />
                <div className="px-3">
                  <Skeleton className="h-4 w-1/2 my-2" />
                  <Skeleton className="h-6 w-3/4 my-2" />
                  <Skeleton className="h-4 w-full my-2" />
                  <Skeleton className="h-4 w-5/6 my-2" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default BlogLoading;
