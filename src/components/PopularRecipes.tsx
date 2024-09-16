import { Badge } from "./ui";
import { Star } from "lucide-react";
import HealthyFoodImg from "../assets/healthy-food.png";
import { Link } from "react-router-dom";
import { Recipe } from "@/lib/types";

interface PopularRecipesProps {
  popularRecipes: Recipe[] | undefined;
  isLoading: boolean;
}

const PopularRecipes: React.FC<PopularRecipesProps> = ({
  popularRecipes,
  isLoading,
}) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(popularRecipes);

  return (
    <>
      {!isLoading && popularRecipes && (
        <>
          <p className="text-xl font-bold mb-4">Popular recipes</p>
          <div className="grid grid-cols-1 gap-y-4 mb-5 ">
            {popularRecipes.map((recipe) => (
              <div
                key={recipe._id}
                className="flex gap-x-4 h-auto w-full shadow-md p-2 rounded-2xl hover:shadow-slate-300 hover:shadow-lg"
              >
                <Link
                  to={`/recipe/${recipe._id}`}
                  className="inline-flex w-4/6  cursor-pointer"
                >
                  <img
                    className="w-full h-full object-cover rounded-2xl"
                    src={recipe.recipeImg}
                  />
                </Link>
                <div className="flex flex-col justify-between w-full gap-y-5">
                  <Link className="cursor-pointer" to={`/recipe/${recipe._id}`}>
                    <p className="text-xs md:text-sm font-bold w-full md:w-11/12 h-auto leading-snug line-clamp-2">
                      {recipe.recipeName}
                    </p>
                  </Link>
                  <div className="flex justify-between">
                    <Badge variant="secondary">Dinner</Badge>

                    <div className="flex gap-x-1 items-center mr-2">
                      <Star className="w-3 text-yellow-500 fill-current" />
                      <span className="text-xs font-semibold">
                        {recipe.rating.value}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <img
            src={HealthyFoodImg}
            className="hidden lg:block w-full md:w-4/6 lg:w-full "
          />
        </>
      )}
    </>
  );
};
export default PopularRecipes;
