import { Avatar, AvatarImage, Button, Separator } from "@/components/ui";
import {
  Calendar,
  Heart,
  MessageSquare,
  TrendingUp,
  Upload,
} from "lucide-react";

import useMediaQuery from "@/hook/useMediaQuery";
import { useParams } from "react-router-dom";
import {
  useGetPopularRecipes,
  useGetRecipe,
  useRecipesRecommendations,
} from "@/api/RecipeApi";
import { formatDate } from "@/lib/functions";
import PopularRecipes from "@/components/PopularRecipes";
import RecipeLoading from "@/components/RecipeLoading";
import CardRecipe from "@/components/CardRecipe";
import {
  NutritionInfo,
  PreparationSteps,
  ReatingRecipe,
  RecipeDetails,
  RecipeIngredients,
} from "@/components/PageRecipe";
import Container from "@/components/Container";

const Recipe = () => {
  const { recipeId } = useParams();
  const { recipe, isLoading } = useGetRecipe(recipeId);
  const { popularRecipes, isLoading: polularIsLoading } =
    useGetPopularRecipes();
  const { recipesRecommendations } = useRecipesRecommendations(recipeId);

  const isMediumScreens = useMediaQuery("(min-width: 1024px)");

  if (isLoading) {
    return <RecipeLoading />;
  }

  if (!recipe) {
    return "Recipes not found";
  }

  return (
    <>
      <Container className="mt-10 mb-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <TrendingUp className="w-4" />
            <span className="text-xs md:text-md font-semibold">
              85% would make this again
            </span>
          </div>
          <div className="flex gap-x-3">
            <Button>
              <Upload className="w-4" />
            </Button>
            <Button>
              <Heart className="w-4" />
            </Button>
          </div>
        </div>
        <p className="text-xl md:text-3xl font-bold mt-6 w-full md:w-4/6">
          {recipe.recipeName}
        </p>
        <div className="flex items-center justify-start gap-x-4 mt-3 flex-wrap gap-y-4 mb-2">
          <div className="flex items-center gap-x-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src={recipe.author.image} />
            </Avatar>
            <p className="text-xs md:text-sm font-semibold opacity-80">
              {recipe.author.name}
            </p>
          </div>
          <div className="flex items-center gap-x-1">
            <Calendar className="w-5 text-black" />
            <span className="text-xs md:text-sm font-semibold">
              {formatDate(recipe.createdAt)}
            </span>
          </div>
          <div className="flex items-center gap-x-1">
            <MessageSquare className="w-5 text-black" />
            <span className="text-xs md:text-sm font-semibold">25</span>
          </div>
          <ReatingRecipe {...recipe.rating} />
        </div>
        <Separator />
        <div className="md:flex mt-4 md:gap-x-10">
          <img
            className="w-full  md:w-[73%]  object-cover rounded-2xl"
            src={recipe.recipeImg}
            alt="Img"
          />
          {isMediumScreens && (
            <div className="md:w-3/12">
              <NutritionInfo details={recipe.nutritionDetails} />
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <div className="flex  mt-5">
              <div className="grid grid-cols-4 gap-x-4">
                <RecipeDetails details={recipe.recipesDetails} />
              </div>
            </div>
            <RecipeIngredients ingredients={recipe.ingredients} />
            <Separator />
            <PreparationSteps steps={recipe.preparationSteps} />
          </div>
          <div className="lg:col-span-3  lg:px-2 mt-10">
            <PopularRecipes
              popularRecipes={popularRecipes}
              isLoading={polularIsLoading}
            />
          </div>
        </div>
        <h4 className="text-2xl font-bold mt-7">
          Recommendation recipes for you
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-6 mt-5 md:mt-5 mb-5">
          {recipesRecommendations?.map((recipe) => (
            <CardRecipe {...recipe} key={recipe._id} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Recipe;
