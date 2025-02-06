import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface ServiceCardProps {
  cardImage: StaticImageData;
  header: string;
  headerSize?: string;
  headerHelper?: string;
  body: string;
  bodySize?: string;
  name?: string;
  profileImage?: StaticImageData | ReactNode;
  footer: ReactNode;
}
