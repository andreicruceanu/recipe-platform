import { recipes } from "@/lib/types";
import CardRecipe from "./CardRecipe";

const TastyRecipes = () => {
  return (
    <div className="custom-container max-w-7xl mt-10 lg:mt-28">
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
        {recipes.map((recipe, index) => (
          <CardRecipe {...recipe} key={index} />
        ))}
      </div>
    </div>
  );
};

export default TastyRecipes;
