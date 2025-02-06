import Link from "next/link";
import { FooterLogo } from "@/public/images";

const Footer = () => {
  return (
    <div className=" px-5 lg:px-24 sm:px-16 grid grid-cols-1 md:grid-cols-5 justify-between items-start py-20 gap-10 hero">
      <div className="space-y-8 col-span-2">
        <Link href={"/"}>
          <FooterLogo />
        </Link>

        <p className="w-full md:max-w-xs text-primary-grey">
          Social media validation business model canvas graphical user interface
          launch party creative facebook iPad twitter.
        </p>

        <p className="text-primary-grey">All rights reserved.</p>
      </div>

      <div className="flex flex-col gap-8">
        <p className="font-bold">Landings</p>
        <div className="text-primary-grey flex gap-8 flex-col">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Products</Link>
          <Link href={"/"}>Services</Link>
        </div>
      </div>

      <div className="flex flex-col gap-8 ">
        <p className="font-bold  ">Company</p>
        <div className="text-primary-grey flex gap-8 flex-col">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Careers Policy</Link>
          <Link href={"/"}>Services</Link>
        </div>
      </div>

      <div className="flex flex-col gap-8 ">
        <p className="font-bold ">Resources</p>
        <div className="text-primary-grey flex gap-8 flex-col">
          <Link href={"/"}>Blog</Link>
          <Link href={"/"}>Products</Link>
          <Link href={"/"}>Services</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
