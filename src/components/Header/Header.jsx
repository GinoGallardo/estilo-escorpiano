"use client";
import { useState } from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import SocialNetwork from "./SocialNetwork";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="px-4 py-2">
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex justify-around items-center">
          <Logo />
          <NavLink />
          <SocialNetwork />
        </div>
      </header>
      <Dialog
        as="div"
        className="lg:hidden fixed inset-0 z-50"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <Dialog.Panel className="fixed bg-white w-full h-screen p-6 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flex flex-col justify-center items-stretch">
            <Logo />
            <NavLink />
            <SocialNetwork />
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default Header;
