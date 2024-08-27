import { categories } from "@/lib/categories";
import { Button } from "./ui";
import CategoriesCard from "./CategoriesCard";

const Categories = () => {
  return (
    <div className="container mx-auto max-w-7xl mt-10 lg:mt-20">
      <div className="flex items-center justify-between mb-10">
        <h4 className="text-xl md:text-3xl font-bold">Categories</h4>
        <Button size="sm">
          <span className="text-xs md:text-sm">View All Categories</span>
        </Button>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-x-4 md:gap-x-8 gap-y-4">
        {categories.map((item) => (
          <CategoriesCard {...item} key={item.name} />
        ))}
      </div>

      <div className="h-28"></div>
    </div>
  );
};

export default Categories;
