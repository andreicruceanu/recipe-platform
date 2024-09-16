import { Button, Input } from "./ui";
import SaladImg from "../assets/Salad.png";
import SaladFreshImg from "../assets/SaladFresh.png";
import RucolaImg from "../assets/Rucola.png";
import Container from "./Container";

function Newsletter() {
  return (
    <Container className="mt-10">
      <div className="bg-customBlue w-full h-[200px] md:h-[400px] rounded-2xl relative overflow-hidden">
        <div className="flex h-full w-full md:w-3/6 mx-auto  justify-center items-start md:items-center">
          <div className="flex flex-col mt-5 md:mt-0">
            <p className="text-md md:text-3xl font-bold text-center mb-6 md:mb-0">
              Deliciousness to your inbox
            </p>
            <span className="hidden md:block text-sm text-center my-5 opacity-70">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </span>
            <div className="flex w-full items-center space-x-2 bg-white p-2 rounded-2xl ">
              <Input
                type="email"
                placeholder="Your email address..."
                className="text-base custom-input-newsletter border-none p-2 md:p-4"
              />
              <Button
                className="rounded-2xl  md:px-8 md:py-7 text-xs md:text-md"
                type="submit"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <img
          className="absolute bottom-0 right-0 w-1/6"
          src={SaladImg}
          alt="Salad"
        />
        <img
          className="absolute bottom-0 left-0 w-1/5"
          src={SaladFreshImg}
          alt="Salad Fresh"
        />
        <img
          className="hidden md:absolute bottom-24 right-36 w-[90px]"
          src={RucolaImg}
          alt="Roucola"
        />
      </div>
    </Container>
  );
}

export default Newsletter;
