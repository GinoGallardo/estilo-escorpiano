import { PopoverGroup } from "@headlessui/react";
import { Link } from "react-router-dom";

const link = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/services" },
  { name: "Sobre mí", href: "/about" },
  { name: "Contacto", href: "/contact" },
];

const NavLink = () => {
  return (
    <nav aria-label="Global" className="flex p-6 lg:px-8">
      <PopoverGroup className="flex flex-col lg:flex-row gap-y-10 lg:gap-y-0  lg:gap-x-12">
        {link.map((item, index) => (
          <div key={index}>
            <Link
              to={item.href}
              className="relative text-xl text-parraf font-bebas pb-1  tracking-widest font-light after:content-[''] hover:text-primary after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-primary hover:after:w-full after:transition-all"
            >
              {item.name}
            </Link>
          </div>
        ))}
      </PopoverGroup>
    </nav>
  );
};

export default NavLink;
