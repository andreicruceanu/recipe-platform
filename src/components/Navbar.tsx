import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { Button, Separator } from "./ui";

const Navbar = () => {
  return (
    <>
      <div className="align-element py-8 px-8 flex items-center justify-between">
        <Logo />
        <NavLinks />
        <div className="flex gap-4">
          <Button size="sm">Log In</Button>
          <Button size="sm">Sign Up</Button>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default Navbar;
