import { useGetPopularRecipes } from "@/api/RecipeApi";
import CardRecipe from "./CardRecipe";
import SkeletonCard from "./SkeletonCard";
import { Button } from "./ui";
import Container from "./Container";

const TastyRecipes = () => {
  const { popularRecipes, isLoading } = useGetPopularRecipes();

  if (isLoading) {
    return (
      <Container className=" mt-10 lg:mt-28">
        <div className="flex flex-col gap-4 justify-center items-center w-full">
          <div className="bg-gray-300 h-5 w-2/6 rounded"></div>
          <div className="bg-gray-300 h-3 w-3/6 rounded"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-12 gap-y-6 mt-12 mb-5">
          {[1, 2, 3].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </Container>
    );
  }

  return (
    <Container className=" mt-10 lg:mt-28">
      <div className="flex flex-col gap-4 justify-center items-center w-full">
        <h4 className="text-2xl lg:text-4xl font-bold">
          Simple and tasty recipes
        </h4>
        <p className="text-sm text-center">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-12 gap-y-6  mt-12 mb-5">
        {popularRecipes?.map((recipe) => (
          <CardRecipe {...recipe} key={recipe._id} background />
        ))}
      </div>
      <div className="w-full text-center mt-10">
        <Button size="lg">More Recipes</Button>
      </div>
    </Container>
  );
};

export default TastyRecipes;
