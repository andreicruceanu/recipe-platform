import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { Button } from "./ui";

const Navbar = () => {
  return (
    <div className="container py-8 flex items-center justify-between">
      <Logo />
      <NavLinks />
      <div className="flex gap-4">
        <Button>Log In</Button>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
};

export default Navbar;
