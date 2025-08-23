import { PopoverGroup } from "@headlessui/react";

const link = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/services" },
  { name: "Acerca de", href: "/about" },
  { name: "Productos", href: "/products" },
  { name: "Contacto", href: "/contact" },
];

const NavLink = () => {
  return (
    <nav aria-label="Global" className="flex p-6 lg:px-8">
      <PopoverGroup className="flex flex-col lg:flex-row gap-y-10 lg:gap-y-0  lg:gap-x-12">
        {link.map((item, index) => (
          <div key={index}>
            <a
              href={item.href}
              className="relative text-parraf font-bebas pb-1  tracking-widest font-light after:content-[''] hover:text-primary after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-primary hover:after:w-full after:transition-all"
            >
              {item.name}
            </a>
          </div>
        ))}
      </PopoverGroup>
    </nav>
  );
};

export default NavLink;
