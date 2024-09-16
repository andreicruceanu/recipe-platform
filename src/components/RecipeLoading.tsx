import useMediaQuery from "@/hook/useMediaQuery";
import Container from "./Container";
import { Skeleton } from "./ui";

const RecipeLoading = () => {
  const isMediumScreens = useMediaQuery("(min-width: 1024px)");

  return (
    <Container className="animate-pulse mt-10 mb-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <Skeleton className="h-4 w-40 rounded-full" />
        </div>
        <div className="flex">
          <Skeleton className="h-10 w-28 rounded-md" />
        </div>
      </div>
      <Skeleton className="mt-6 h-10 w-full md:w-4/6" />
      <div className="flex items-center justify-start gap-x-4 mt-3 flex-wrap gap-y-4 mb-2">
        <div className="flex items-center gap-x-2">
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
        <div className="flex items-center">
          <Skeleton className="h-5 w-[200px] rounded-none" />
        </div>
      </div>

      <div className="md:flex mt-4 md:gap-x-10">
        <Skeleton className="w-full h-[420px]  md:w-[73%]" />
        {isMediumScreens && <Skeleton className="md:w-3/12" />}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-9">
          <div className="flex  mt-5">
            <div className="grid grid-cols-4 gap-x-4">
              <Skeleton className="h-20 w-20" />
              <Skeleton className="h-20 w-20" />
              <Skeleton className="h-20 w-20" />
              <Skeleton className="h-20 w-20" />
            </div>
          </div>
          <Skeleton className=" mt-10 w-[100px] h-6" />
          <div className="flex flex-row gap-x-4 flex-wrap">
            <div className=" flex flex-col gap-4 ml-4 mt-8 ">
              <Skeleton className="w-[300px] h-5 rounded-none" />
              <Skeleton className="w-[300px] h-5 rounded-none" />
              <Skeleton className="w-[300px] h-5 rounded-none" />
              <Skeleton className="w-[300px] h-5 rounded-none" />
              <Skeleton className="w-[300px] h-5 rounded-none" />
            </div>
            <div className=" flex flex-col gap-4 ml-4 mt-8 ">
              <Skeleton className="w-[300px] h-5 rounded-none" />
              <Skeleton className="w-[300px] h-5 rounded-none" />
              <Skeleton className="w-[300px] h-5 rounded-none" />
              <Skeleton className="w-[300px] h-5 rounded-none" />
              <Skeleton className="w-[300px] h-5 rounded-none" />
            </div>
          </div>
        </div>
        <div className="lg:col-span-3  lg:px-2 mt-10">
          <div className="grid grid-cols-1 gap-y-4 mb-5 ">
            <Skeleton className="w-full h-[90px] rounded-2xl" />
            <Skeleton className="w-full h-[90px] rounded-2xl" />
            <Skeleton className="w-full h-[90px] rounded-2xl" />
            <Skeleton className="w-full h-[90px] rounded-2xl" />
            <Skeleton className="w-full h-[90px] rounded-2xl" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RecipeLoading;
