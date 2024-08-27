import { Avatar, AvatarImage, Badge, Button } from "@/components/ui";
import HeroImg from "../assets/HeroImg.png";
import BageImg from "../assets/HotRecipe.png";
import AvatarImg from "../assets/Avatar.png";
import { CirclePlay, Clock2, Utensils } from "lucide-react";

const Hero = () => {
  return (
    <div className="container align-element lg:mt-9">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:rounded-2xl overflow-hidden">
        <div className="bg-customBlue w-full ">
          <div className="flex flex-col justify-start p-8">
            <div className="flex flex-row items-center justify-center w-[150px] p-2 bg-white  gap-2 rounded-full">
              <img className="w-5" src={BageImg} alt="BagImg" />
              <span className="text-xs font-bold">Hot Recipes</span>
            </div>
            <div className="mt-14">
              <h1 className="text-4xl lg:text-5xl font-bold lg:w-5/6 lg:leading-tight">
                Spicy delicious chicken wings
              </h1>
              <p className=" text-sm opacity-70 mt-3 lg:w-5/6">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim
                ad minim
              </p>
              <div className="flex flex-row gap-3 mt-6">
                <Badge className="bg-red-500 text-white py-1 px-3">
                  <Clock2 className="mr-3 w-4" />
                  30 Minutes
                </Badge>
                <Badge className="bg-red-500 text-white py-1 px-3">
                  <Utensils className="mr-3 w-4" />
                  Chicken
                </Badge>
              </div>
              <div className="flex items-center justify-between lg:w-5/6 mt-16 lg:mt-32">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={AvatarImg} />
                  </Avatar>
                  <div className="flex flex-col leading-6">
                    <span className="font-bold">Jhon Smith</span>
                    <span className="text-xs">15 Match 2022</span>
                  </div>
                </div>
                <Button
                  size="icon"
                  className="w-[160px] gap-3 rounded-xl text-xs"
                >
                  View Recipes
                  <CirclePlay className="w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex">
          <img className="w-full object-cover" src={HeroImg} alt="HeroImg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
