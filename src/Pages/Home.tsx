import Categories from "@/components/Categories";
import Component from "@/components/Component";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Recipes from "@/components/Recipes";
import TastyRecipes from "@/components/TastyRecipes";

const Home = () => (
  <>
    <Hero />
    <Categories />
    <TastyRecipes />
    <Component />
    <Recipes />
    <Newsletter />
  </>
);

export default Home;
