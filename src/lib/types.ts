export type Categories = {
  name: string;
  image: string;
  colorStart: string;
  colorEnd: string;
};

// export const recipes: Recipe[] = [
//   {
//     title:
//       "Big and Juicy Wagyu Beef Cheeseburgersdasdasdasdasdassssssssssssssssssssadsdasdasdasdasdasdasdasdasdddddddddddddd",
//     imageUrl:
//       "https://res.cloudinary.com/dgrttwv8y/image/upload/v1725014188/bl17lm5lkwiq4bx9gb5b.png",
//     categories: "Snack",
//     cookTime: 120,
//   },
//   {
//     title: "Strawberry Oatmeal Pancake with Honey Syrup",
//     imageUrl:
//       "https://res.cloudinary.com/dgrttwv8y/image/upload/v1725023903/Recipes1_hfddda.png",
//     categories: "Snack",
//     cookTime: 120,
//   },
//   {
//     title: "Fresh Lime Roasted Salmon with Ginger Sauce",
//     imageUrl:
//       "https://res.cloudinary.com/dgrttwv8y/image/upload/v1725023903/Recipes2_dhufjq.png",
//     categories: "Snack",
//     cookTime: 120,
//   },
//   {
//     title: "Fresh and Healthy Mixed Mayonnaise Salad",
//     imageUrl:
//       "https://res.cloudinary.com/dgrttwv8y/image/upload/v1725014188/bl17lm5lkwiq4bx9gb5b.png",
//     categories: "Snack",
//     cookTime: 120,
//   },
//   {
//     title: "Chicken Meatballs with Cream Cheese",
//     imageUrl:
//       "https://res.cloudinary.com/dgrttwv8y/image/upload/v1725014188/bl17lm5lkwiq4bx9gb5b.png",
//     categories: "Snack",
//     cookTime: 120,
//   },
//   {
//     title: "Fruity Pancake with Orange & Blueberry",
//     imageUrl:
//       "https://res.cloudinary.com/dgrttwv8y/image/upload/v1725014188/bl17lm5lkwiq4bx9gb5b.png",
//     categories: "Snack",
//     cookTime: 120,
//   },
//   {
//     title: "The Creamiest Creamy Chicken and Bacon Pasta",
//     imageUrl:
//       "https://res.cloudinary.com/dgrttwv8y/image/upload/v1725014188/bl17lm5lkwiq4bx9gb5b.png",
//     categories: "Snack",
//     cookTime: 120,
//   },
//   {
//     title: "Chicken Ramen Soup with Mushroom ",
//     imageUrl:
//       "https://res.cloudinary.com/dgrttwv8y/image/upload/v1725014188/bl17lm5lkwiq4bx9gb5b.png",
//     categories: "Snack",
//     cookTime: 120,
//   },
//   {
//     title: "The Best Easy One Pot Chicken and Rice",
//     imageUrl:
//       "https://res.cloudinary.com/dgrttwv8y/image/upload/v1725014188/bl17lm5lkwiq4bx9gb5b.png",
//     categories: "Snack",
//     cookTime: 120,
//   },
// ];

// Definirea tipurilor pentru detaliile nutriționale
type NutritionDetail = {
  _id: string;
  name: string;
  value: string;
};

// Definirea tipurilor pentru detaliile rețetei
type RecipeDetail = {
  _id: string;
  label: string;
  value: string;
};

// Definirea tipurilor pentru ingrediente
export type Ingredient = {
  _id: string;
  name: string;
  ingredients: string[];
};

// Definirea tipurilor pentru pașii de preparare
type PreparationStep = {
  _id: string;
  stepNumber: number;
  description: string;
  imageUrl?: string;
};

type Author = {
  authorId: number;
  name: string;
  image: string;
};

type Rating = {
  value: number;
  ratingsCount: number;
};

// Definirea tipului principal pentru rețetă
export type Recipe = {
  _id: string;
  recipeName: string;
  recipeImg: string;
  author: Author;
  rating: Rating;
  nutritionDetails: NutritionDetail[];
  recipesDetails: RecipeDetail[];
  ingredients: Ingredient[];
  preparationSteps: PreparationStep[];
  createdAt: string;
};
