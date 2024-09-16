import { useGetPopularRecipes } from "@/api/RecipeApi";
import CardRecipe from "./CardRecipe";
import SkeletonCard from "./SkeletonCard";
import { Button } from "./ui";
import Container from "./Container";

const Recipes = () => {
  const { popularRecipes, isLoading } = useGetPopularRecipes();

  if (isLoading) {
    return (
      <Container className="mt-10 lg:mt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="bg-gray-300 h-4 w-full md:w-3/5 rounded"></div>
          <div className="bg-gray-300 h-3 hidden md:block rounded"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-6 mt-5 md:mt-12 mb-5">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </Container>
    );
  }

  return (
    <Container className="mt-10 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <p className="text-lg text-center md:text-left md:text-3xl font-bold w-full md:w-3/5">
          Try this delicious recipe to make your day
        </p>

        <p className="hidden md:block text-sm opacity-80">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim s
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-6 mt-5 md:mt-12 mb-5">
        {popularRecipes?.map((recipe) => (
          <CardRecipe {...recipe} key={recipe._id} />
        ))}
      </div>

      <div className="w-full text-center mt-7">
        <Button size="lg">More Recipes</Button>
      </div>
    </Container>
  );
};

export default Recipes;
