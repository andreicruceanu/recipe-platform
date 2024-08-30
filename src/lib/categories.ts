import BreakfastImg from "../assets/Breakfast.png";
import VeganImg from "../assets/Vegan.png";
import MeatImg from "../assets/Meat.png";
import DessertImg from "../assets/Dessert.png";
import LunchImg from "../assets/Lunch.png";
import ChocolateImg from "../assets/Chocolate.png";

export type Categories = {
  name: string;
  image: string;
  colorStart: string;
  colorEnd: string;
};

export const categories: Categories[] = [
  {
    name: "Breakfast",
    image: BreakfastImg,
    colorStart: "rgba(112, 130, 70, 0)",
    colorEnd: "rgba(112, 130, 70, 0.2)",
  },
  {
    name: "Vegan",
    image: VeganImg,
    colorStart: "rgba(108, 198, 63, 0)",
    colorEnd: "rgba(108, 198, 63, 0.2)",
  },
  {
    name: "Meat",
    image: MeatImg,
    colorStart: "rgba(204, 38, 27, 0)",
    colorEnd: "rgba(204, 38, 27, 0.2)",
  },
  {
    name: "Dessert",
    image: DessertImg,
    colorStart: "rgba(240, 158, 0, 0)",
    colorEnd: "rgba(240, 158, 0, 0.2)",
  },
  {
    name: "Lunch",
    image: LunchImg,
    colorStart: "rgba(0, 0, 0, 0)",
    colorEnd: "rgba(61, 4, 0, 0.1)",
  },
  {
    name: "Chocolate",
    image: ChocolateImg,
    colorStart: "rgba(0, 0, 0, 0)",
    colorEnd: "rgba(137, 13, 5, 0.1)",
  },
];
