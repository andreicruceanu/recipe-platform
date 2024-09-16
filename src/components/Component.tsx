import CookImg from "../assets/Cook.png";
import { Button } from "./ui";
import VeganImg from "../assets/Vegan.png";
import OnionImg from "../assets/onion.png";
import MeatImg from "../assets/Meat.png";
import TomatoImg from "../assets/tomato.png";
import Container from "./Container";

const Component = () => {
  return (
    <Container className="mt-8 mb-20 lg:mt-24">
      <div className="grid bg-custom-gradient md:bg-none grid-cols-1 md:grid-cols-2 rounded-xl">
        <div className="flex p-2">
          <div className="flex flex-col items-start gap-y-8 justify-center text-start  md:w-5/6">
            <div>
              <h5 className="text-md md:text-5xl font-semibold text-left leading-tight">
                Everyone can be a chef in their own kitchen
              </h5>
              <p className="text-xs md:text-sm mt-5 opacity-80">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim
                ad minim
              </p>
            </div>
            <Button className="mt-8 sm:text-xs  md:w-40 md:p-7 rounded-xl text-xs shadow-lg">
              Learn More
            </Button>
          </div>
          <img
            src={CookImg}
            className="block w-3/6 md:hidden object-cover z-9"
            alt="CookImg"
          />
        </div>
        <div
          style={{
            background: `linear-gradient(180deg, rgba(231,249,253,0) 0%, #E0FAFE 100%)`,
          }}
          className="hidden md:block
           rounded-2xl relative"
        >
          <img src={CookImg} className="object-cover z-9" alt="CookImg" />
          <img
            className="hidden md:block absolute w-14 top-10 right-32"
            src={OnionImg}
            alt="OnionImg"
          />
          <img
            className="hidden md:block absolute w-14 top-28 right-12"
            src={VeganImg}
            alt="VeganImg"
          />
          <img
            className="hidden md:block absolute w-14 top-20 left-12"
            src={MeatImg}
            alt="MeatImg"
          />
          <img
            className=" hidden md:block absolute w-10 bottom-20 left-2"
            src={TomatoImg}
            alt="TomatoImg"
          />
        </div>
      </div>
    </Container>
  );
};

export default Component;
