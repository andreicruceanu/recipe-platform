import React from "react";
import CheckIngredient from "../CheckIngredient";
import { nanoid } from "nanoid";
import { Ingredient } from "@/lib/types";

type RecipeDetailsProps = {
  ingredients: Ingredient[];
};

const RecipeIngredients: React.FC<RecipeDetailsProps> = ({ ingredients }) => {
  return (
    <div className="mb-6">
      <p className="text-2xl font-bold mt-10">Ingredients</p>
      <div className="flex mt-5 pl-2 gap-x-12">
        {ingredients.map((item) => (
          <div key={item._id} className="flex flex-col gap-y-4 mt-3">
            <p className="text-sm font-bold">{item.name}</p>
            {item.ingredients.map((element) => (
              <CheckIngredient id={nanoid()} key={nanoid()} label={element} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export { RecipeIngredients };
