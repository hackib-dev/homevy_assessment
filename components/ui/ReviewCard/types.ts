import { StaticImageData } from "next/image";

export interface ReviewCardProps {
  image: StaticImageData;
  name: string;
  role: string;
  review: string;
}
