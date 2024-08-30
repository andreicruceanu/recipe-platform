import { Heart } from "lucide-react";
import { Button } from "./ui";

const ButtonFavorite = () => {
  return (
    <Button
      variant="outline"
      size="sm"
      className="absolute md:w-10 z-99 top-3 right-3 rounded-full"
    >
      <Heart className="h-4 w-4" />
    </Button>
  );
};

export default ButtonFavorite;
