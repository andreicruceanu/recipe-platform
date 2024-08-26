import { links } from "@/lib/links";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="hidden lg:flex justify-center items-center gap-x-7">
      {links.map((link) => {
        return (
          <NavLink to={link.href} key={link.label}>
            <p className="text-base font-medium">{link.label}</p>
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
