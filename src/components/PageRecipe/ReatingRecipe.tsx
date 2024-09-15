import { Star, StarHalf } from "lucide-react";

const FullStar = () => <Star className="w-4 text-yellow-500 fill-current" />;
const EmptyStar = () => <Star className="w-4 text-gray-300 fill-current" />;
const HalfStar = () => (
  <div className="relative w-4 h-4">
    <Star className="absolute top-0 left-0 w-4 h-4 text-gray-300 fill-current" />
    <StarHalf className="absolute top-0 left-0 w-4 h-4 text-yellow-500 fill-current" />
  </div>
);

type Props = {
  value: number;
  ratingsCount: number;
};

const ReatingRecipe = ({ value, ratingsCount }: Props) => {
  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      <span className="text-xs md:text-sm font-semibold mr-1">{value}</span>

      {Array.from({ length: fullStars }).map((_, index) => (
        <FullStar key={index} />
      ))}
      {hasHalfStar && <HalfStar />}

      {Array.from({ length: emptyStars }).map((_, index) => (
        <EmptyStar key={index} />
      ))}
      <p className="text-xs md:text-sm opacity-40 ml-1">({ratingsCount})</p>
    </div>
  );
};

export { ReatingRecipe };
