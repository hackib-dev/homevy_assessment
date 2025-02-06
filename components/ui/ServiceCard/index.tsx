/* eslint-disable @typescript-eslint/no-unused-vars */
import { ServiceCardProps } from "./types";
import Image from "next/image";

const ServiceCardContainer = ({
  cardImage,
  header,
  headerSize,
  headerHelper,
  body,
  bodySize,
  footer,
  name,
  profileImage,
}: ServiceCardProps) => {
  return (
    <div className="flex flex-col  h-full justify-between space-y-4">
      <div className="space-y-4">
        <Image src={cardImage} alt="pen" className="w-full md:w-72" />
        <p className={headerSize || "text-base lg:text-xl"}>
          {header}{" "}
          {headerHelper && (
            <span className="text-primary-grey font-normal ml-3">
              {headerHelper}
            </span>
          )}
        </p>
        <p
          className={`text-primary-grey ${bodySize || "text-base lg:text-lg"}`}
        >
          {body}
        </p>
      </div>

      <div className="mt-auto">{footer}</div>
    </div>
  );
};

export default ServiceCardContainer;
