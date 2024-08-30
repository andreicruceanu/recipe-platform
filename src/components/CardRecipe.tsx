import { Recipe } from "@/lib/types";
import { Clock, Utensils } from "lucide-react";
import ButtonFavorite from "./ButtonFavorite";

const CardRecipe = ({ title, cookTime, categories, imageUrl }: Recipe) => {
  return (
    <div
      style={{
        background: `linear-gradient(180deg, rgba(231,249,253,0) 0%, #E0FAFE 100%)`,
      }}
      className="h-full w-full rounded-2xl  p-2 md:p-4"
    >
      <div className="flex flex-col gap-y-5">
        <div>
          <div className="w-full  overflow-hidden relative">
            <img
              className="w-full h-full rounded-2xl object-cover"
              src={imageUrl}
              alt={title}
            />
            <ButtonFavorite />
          </div>
          <p className="text-xs md:text-base font-bold w-full md:w-11/12 leading-snug mt-3">
            {title}
          </p>
        </div>
        <div className="flex items-center gap-x-2 md:gap-x-4">
          <div className="flex items-center gap-x-1">
            <Clock className="w-3 md:w-5 coloe text-black" />
            <span className="text-xs opacity-90">{cookTime} Minutes</span>
          </div>
          <div className="flex items-center gap-x-1">
            <Utensils className="w-3 md:w-5 coloe text-black" />
            <span className="text-xs opacity-90 leading-7">{categories}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRecipe;
