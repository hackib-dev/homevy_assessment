"use client";

import { MenuItemProps, menuItems } from "./constant";
import Link from "next/link";
import { useState } from "react";
import { MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { FaX } from "react-icons/fa6";
import { HeaderArc, Logo } from "@/public/images";

const MenuItem: React.FC<MenuItemProps> = ({ href, children, onClick }) => {
  const linkProps = href.startsWith("http")
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href };

  return (
    <Link {...linkProps} onClick={onClick}>
      <span className="font-medium text-center transition duration-300 hover:text-base">
        {children}
      </span>
    </Link>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const renderMenuItems = () => {
    return menuItems.map((item, index) => {
      const isActive = pathname === item.href;

      return (
        <MenuItem key={index} href={item.href} onClick={() => setIsOpen(false)}>
          <span className={isActive ? "text-white font-semibold " : ""}>
            {item.label}
          </span>
        </MenuItem>
      );
    });
  };

  return (
    <div className="">
      <div
        className={`px-5 lg:px-24 bg-primary-blue py-5 sm:px-16 flex items-center z-50  w-full justify-between ${
          isOpen ? "fixed top-0 right-0 left-0 z-50 mb-20" : ""
        } `}
      >
        <div className="flex justify-between items-center w-full">
          <div className="z-50">
            <Link href={"/"}>
              <Logo />
            </Link>
          </div>
          <div className="z-50 hidden md:flex gap-2">
            <div className="flex gap-10 items-center z-50">
              {menuItems.map((item, index) => {
                return item.label === "Log In" ? (
                  <Link key={index} href={item.href}>
                    <div
                      className={`text-[#0A2640] text-sm font-bold bg-white px-10 py-2 rounded-3xl`}
                    >
                      {item.label}
                    </div>
                  </Link>
                ) : (
                  <Link key={index} href={item.href}>
                    <div className="text-sm text-white">{item.label}</div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="absolute top-0 z-10 right-0 ">
          <HeaderArc />
        </div>

        <div className="flex md:hidden z-50">
          {isOpen ? (
            <FaX
              onClick={toggleMenu}
              aria-label="Toggle menu"
              color="white"
              size={20}
            />
          ) : (
            <MenuIcon
              onClick={toggleMenu}
              aria-label="Toggle menu"
              color="white"
            />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col md:hidden mt-20  z-50 overflow-hidden">
          <div className="flex flex-col z-50 bg-primary-blue h-screen items-center justify-center fixed w-full gap-10  overflow-hidden">
            {renderMenuItems()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
