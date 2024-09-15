import { Recipe } from "@/lib/types";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetRecipe = (recipeId?: string) => {
  const getRecipe = async (): Promise<Recipe> => {
    const response = await fetch(`${API_BASE_URL}/api/recipe/${recipeId}`);

    if (!response.ok) {
      throw new Error("Failed to get recipe");
    }

    return response.json();
  };

  const { data: recipe, isLoading } = useQuery(
    ["fetchRecipe", recipeId],
    getRecipe,
    {
      enabled: !!recipeId,
      retry: false,
    }
  );

  return { recipe, isLoading };
};

export const useGetPopularRecipes = () => {
  const getPopularRecipes = async (): Promise<Recipe[]> => {
    const response = await fetch(`${API_BASE_URL}/api/recipes/popular`);

    if (!response.ok) {
      throw new Error("Failed to get popular recipe");
    }

    return response.json();
  };

  const { data: popularRecipes, isLoading } = useQuery(
    "fetchPopularRecipe",
    getPopularRecipes,
    {
      retry: false,
    }
  );

  return { popularRecipes, isLoading };
};

export const useRecipesRecommendations = (recipeId?: string) => {
  const getRecipesRecommendations = async (): Promise<Recipe[]> => {
    const response = await fetch(
      `${API_BASE_URL}/api/recipe/${recipeId}/recommendations`
    );

    if (!response.ok) {
      throw new Error("Failed to get recipe");
    }

    return response.json();
  };

  const { data: recipesRecommendations, isLoading } = useQuery(
    ["recipesRecommendations", recipeId],
    getRecipesRecommendations,
    {
      enabled: !!recipeId,
      retry: false,
    }
  );

  return { recipesRecommendations, isLoading };
};
