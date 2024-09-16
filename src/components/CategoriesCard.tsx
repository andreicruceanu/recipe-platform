import { Categories } from "@/lib/types";
import { Link } from "react-router-dom";

const CategoriesCard = ({ name, image, colorEnd, colorStart }: Categories) => {
  return (
    <div
      className="w-full p-2 py-5 rounded-xl"
      style={{
        background: `linear-gradient(180deg, ${colorStart} 0%, ${colorEnd} 100%)`,
      }}
    >
      <Link to="/" className="flex flex-col items-center gap-6 md:gap-12">
        <img
          src={image}
          alt={name}
          className="w-8 md:w-16 lg:w-20 rounded-lg"
        />
        <span className="text-xs md:text-sm font-bold">{name}</span>
      </Link>
    </div>
  );
};

export default CategoriesCard;
