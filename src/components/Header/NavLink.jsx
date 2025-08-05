import { PopoverGroup } from "@headlessui/react";

const link = [
  { name: "Inicio", href: "#" },
  { name: "Servicios", href: "#" },
  { name: "Acerca de", href: "#" },
  { name: "Productos", href: "#" },
  { name: "Contacto", href: "#" },
];

const NavLink = () => {
  return (
    <nav aria-label="Global" className="flex p-6 lg:px-8">
      <PopoverGroup className="flex flex-col lg:flex-row gap-y-10 lg:gap-y-0  lg:gap-x-12">
        {link.map((item, index) => (
          <div key={index}>
            <a
              href={item.href}
              className="text-lg font-bebas tracking-widest font-light hover:text-primary text-gray-900"
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
