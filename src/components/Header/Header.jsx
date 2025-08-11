"use client";
import { useState } from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import SocialNetwork from "./SocialNetwork";
import { Dialog, DialogPanel } from "@headlessui/react";

import HamburgerIcon from "../icons/HamburgerIcon";
import CloseIcon from "../icons/CloseIcon";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="px-4 py-2">
        <div className="lg:hidden flex items-center justify-between">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2"
          >
            <HamburgerIcon aria-hidden="true" size={40} color="#8d7955" />
          </button>
          <Logo />
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
        <DialogPanel className="fixed bg-white w-full h-screen p-6 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700"
            >
              <CloseIcon aria-hidden="true" size={40} color="#8d7955" />
            </button>
          </div>
          <div className="flex flex-col gap-y-6 justify-center items-center">
            <Logo />
            <NavLink />
            <SocialNetwork />
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
};

export default Header;
