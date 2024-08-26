import { Link } from "react-router-dom";
import logoImg from "../assets/logo.svg";

const Logo = () => {
  return (
    <Link to="/">
      <img src={logoImg} alt="Logo" className="w-[130px]" />
    </Link>
  );
};

export default Logo;
