import { TopRight } from "@/public/images";
import { Button } from "../ui/button";
import { PartnersLogos } from "@/app/constants";
import HeroImage from "@/public/images/hero-graphics.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative px-5 lg:px-24  sm:px-16 bg-primary-blue py-10  ">
      <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
        <div className="w-full lg:max-w-[410px] flex flex-col gap-8 z-10">
          <p className="text-[36px] md:text-[30px] lg:text-[36px]  text-white leading-relaxed">
            Save time by building fast with Boldo Template
          </p>
          <p className="text-primary-white leading-loose text-[18px] md:text-[12px] hero">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
          <div className="flex flex-col  md:flex-row gap-5 mt-10 md:mt-0">
            <Button className="text-[#0A2640] bg-primary-green rounded-3xl px-14  py-6 font-bold">
              Buy template
            </Button>
            <Button className="text-white bg-primary-blue rounded-3xl px-14  py-6 border-2 border-white font-bold">
              Explore
            </Button>
          </div>
        </div>
        <div className="z-10 hidden md:block">
          <Image
            src={HeroImage}
            alt={"Hero-image"}
            width={"500"}
            height={"500"}
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="overflow-x-hidden  mt-28 md:mt-5">
        <div className="relative w-[1500px] h-[100px] partners-gradient z-40">
          <div className="animate-primary flex justify-around h-full absolute left-0 top-0 w-full items-center p-4 ">
            {PartnersLogos.map((logo, Idx) => {
              return (
                <Image
                  src={logo.image}
                  alt={logo.alt}
                  key={Idx}
                  className="w-fit h-8"
                  placeholder="blur"
                />
              );
            })}
          </div>

          <div className="animate-secondary flex justify-around h-full absolute left-0 top-0 w-full items-center p-4 ">
            {PartnersLogos.map((logo, Idx) => {
              return (
                <Image
                  src={logo.image}
                  alt={logo.alt}
                  key={Idx}
                  className="w-fit h-8"
                  placeholder="blur"
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="absolute top-[0px]  right-0 ">
        <TopRight />
      </div>
    </div>
  );
};

export default HeroSection;
