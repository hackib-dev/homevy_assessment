import { ReviewCardProps } from "./types";
import Image from "next/image";

const ReviewCardContainer = ({
  image,
  name,
  role,
  review,
}: ReviewCardProps) => {
  return (
    <div className="bg-white rounded-lg p-10 h-80 flex flex-col justify-between">
      <p className="text-[18px] leading-8">{review}</p>

      <div className="flex gap-3 items-center">
        <div>
          <Image
            src={image}
            alt="reviewer"
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
        <div className="space-y-1">
          <p className="text-primary-blue font-bold">{name}</p>
          <p className="text-primary-blue text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCardContainer;
