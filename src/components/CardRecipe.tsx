import { Recipe } from "@/lib/types";
import { Clock, Star, Utensils } from "lucide-react";
import ButtonFavorite from "./ButtonFavorite";
import { Link } from "react-router-dom";

interface CardRecipeProps extends Recipe {
  background?: boolean;
}

const CardRecipe = ({
  _id,
  recipeName,
  recipesDetails,
  recipeImg,
  rating,
  background,
}: CardRecipeProps) => {
  return (
    <Link
      to={`/recipe/${_id}`}
      className={`h-full w-full rounded-2xl shadow-md p-2 md:p-4 hover:shadow-slate-300 hover:shadow-xl ${
        background ? "bg-custom-gradient" : ""
      }`}
    >
      <div className="flex flex-col h-full justify-between min-h-[150px] md:min-h-[280px]">
        <div>
          <div className="w-full h-[100px]  md:h-[180px] lg:h-[170px] relative overflow-hidden">
            <img
              className="w-full h-full rounded-2xl object-cover"
              src={recipeImg}
              alt={recipeName}
            />
            <ButtonFavorite />
          </div>
          <div className="h-9 md:h-14 ">
            <p className="text-xs md:text-sm lg:text-base font-bold w-full md:w-11/12 leading-snug mt-3 line-clamp-2">
              {recipeName}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-x-2 md:gap-x-4">
            <div className="flex items-center gap-x-1">
              <Clock className="w-3 md:w-5 text-black" />
              <span className="text-xs opacity-90">
                {recipesDetails.map((el) =>
                  el.label === "Prep time" ? el.value : ""
                )}
              </span>
            </div>
            <div className="flex items-center gap-x-1">
              <Utensils className="w-3 md:w-5  text-black" />
              <span className="text-xs opacity-90 leading-7">
                {recipesDetails.map((el) =>
                  el.label === "Meal Type" ? el.value : ""
                )}
              </span>
            </div>
          </div>
          <div className="hidden md:flex gap-x-1 items-center">
            <Star className="w-4 text-yellow-500 fill-current" />
            <span className="text-sm font-semibold">{rating.value}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardRecipe;
