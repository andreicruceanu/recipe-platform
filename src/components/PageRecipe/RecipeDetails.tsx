import React from "react";
import { Users, Clock, CookingPot, Utensils } from "lucide-react";

type Detail = {
  _id: string;
  label: string;
  value: string;
};

const getIcon = (label: string) => {
  switch (label) {
    case "Servings":
      return Users;
    case "Prep time":
      return Clock;
    case "Cook Time":
      return CookingPot;
    case "Meal Type":
      return Utensils;
    default:
      return null;
  }
};

type RecipeDetailsProps = {
  details: Detail[];
};

const RecipeDetails: React.FC<RecipeDetailsProps> = ({ details }) => {
  return (
    <>
      {details.map((detail) => {
        const Icon = getIcon(detail.label);
        return (
          <div
            key={detail._id}
            className="flex flex-col items-center justify-center"
          >
            {Icon && <Icon className="text-blue-300" />}
            <p className="text-sm font-bold my-1">{detail.label}</p>
            <p className="text-sm opacity-80">{detail.value}</p>
          </div>
        );
      })}
    </>
  );
};

export { RecipeDetails };
