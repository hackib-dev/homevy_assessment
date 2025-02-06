import { MotionDiv } from "@/app/framer";
import ServiceCardContainer from "../ui/ServiceCard";
import { ServiceCardContent } from "../ui/ServiceCard/constants";
import StartImage from "@/public/images/startImage.png";
import Bullet from "@/public/images/bullet.png";
import Image from "next/image";
import { Button } from "../ui/button";
import Leave from "@/public/images/leave.png";
import Sun from "@/public/images/sun.png";
import Eye from "@/public/images/eye.png";
import Customer from "@/public/images/customer.png";
import { FaArrowRight } from "react-icons/fa6";

const OurServices = () => {
  return (
    <div className="px-5 lg:px-24  sm:px-16 py-16">
      <div className="text-left md:text-center">
        <p className="text-primary-grey mb-3">Our Services</p>
        <p className="text-[36px] leading-relaxed max-w-screen-sm mx-auto">
          Handshake infographic mass market crowdfunding iteration.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-20 md:gap-14 md:grid-cols-3  lg:gap-24 mt-16">
        {ServiceCardContent.map((service, Idx) => (
          <MotionDiv
            key={Idx}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: ".9", delay: 0.1 + (Idx / 10) * 2 }}
            viewport={{ once: true }}
          >
            <ServiceCardContainer
              key={service.id}
              cardImage={service.cardImage}
              header={service.header}
              body={service.body}
              footer={
                <Button className="px-0 bg-white text-primary-blue rounded-none border-b  border-primary-blue shadow-transparent font-bold text-base">
                  Explore page <FaArrowRight />
                </Button>
              }
            />
          </MotionDiv>
        ))}
      </div>

      <MotionDiv
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: ".9", delay: 0.1 + (1 / 10) * 2 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 md:mt-48 items-center justify-between">
          <div>
            <Image src={StartImage} alt="" className="w-full lg:w-[85%]" />
          </div>

          <div className="max-w-sm">
            <p className="text-[28px] mb-10">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </p>
            <div className="space-y-5 hero">
              <div className="flex items-center   gap-5">
                <Image src={Bullet} alt="" className="w-6" />
                <p>We connect our customers with the best.</p>
              </div>
              <div className="flex items-center   gap-5">
                <Image src={Bullet} alt="" className="w-6" />
                <p>Advisor success customer launch party.</p>
              </div>
              <div className="flex items-center   gap-5">
                <Image src={Bullet} alt="" className="w-6" />
                <p>Business-to-consumer long tail.</p>
              </div>
            </div>
            <Button className="rounded-3xl bg-primary-blue text-sm px-14 py-6 font-bold mt-10">
              Start now
            </Button>
          </div>
        </div>
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: ".9", delay: 0.1 + (1 / 10) * 2 }}
        viewport={{ once: true }}
      >
        {" "}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 md:mt-36 items-center justify-between">
          <div className="max-w-sm order-2 md:order-1">
            <p className="text-[28px] mb-10">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </p>
            <div className="space-y-5 hero">
              <div className="flex items-center gap-3 bg-primary-blue text-white py-4 px-5 rounded-md shadow-xl text-sm md:text-base">
                <Image src={Leave} alt="" className="w-6" />
                <p>We connect our customers with the best.</p>
              </div>
              <div className="flex items-center gap-3 bg-white text-primary-blue py-4 px-5 rounded-md shadow-xl font-medium text-sm md:text-base">
                <Image src={Eye} alt="" className="w-6" />
                <p>Advisor success customer launch party.</p>
              </div>
              <div className="flex items-center gap-3 bg-white text-primary-blue py-4 px-5 rounded-md shadow-xl font-medium text-sm md:text-base">
                <Image src={Sun} alt="" className="w-6" />
                <p>Business-to-consumer long tail.</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <Image src={Customer} alt="" className="w-full lg:w-[85%]" />
          </div>
        </div>
      </MotionDiv>
    </div>
  );
};

export default OurServices;
