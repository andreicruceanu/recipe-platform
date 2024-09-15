import Logo from "./Logo";
import { Separator } from "./ui";
import FacebookImg from "../assets/Facebook.png";
import InstagramImg from "../assets/Instagram.png";

const Footer = () => {
  return (
    <footer className="custom-container max-w-7xl mt-10 lg:mt-28">
      <div className="flex justify-between items-center">
        <div>
          <Logo />
          <p className="text-xs md:text-sm opacity-70 py-3">
            Lorem ipsum dolor sit amet, consectetuipisicing elit.
          </p>
        </div>
      </div>
      <Separator />
      <div className="flex items-center py-3">
        <p className="text-xs md:text-sm w-5/6 text-center ml-12">
          © 2020 Foodieland. All rights reserved
        </p>
        <div className="flex gap-x-3">
          <img className="w-3" src={FacebookImg} alt="facebook" />
          <img className="w-3" src={InstagramImg} alt="instagram" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
