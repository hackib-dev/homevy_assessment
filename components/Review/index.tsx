"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ReviewCardContainer from "../ui/ReviewCard";
import { Reviews } from "../ui/ReviewCard/constants";
import { useRef } from "react";
import { ReviewArrowButton } from "../ui/ReviewArrowButton";
import { MotionDiv } from "@/app/framer";

interface CarouselApi {
  scrollPrev: () => void;
  scrollNext: () => void;
}

const Review = () => {
  const carouselRef = useRef<CarouselApi | null | undefined>(null);

  const scrollPrev = () => {
    carouselRef.current?.scrollPrev();
  };

  const scrollNext = () => {
    carouselRef.current?.scrollNext();
  };

  return (
    <div className="bg-primary-blue px-5 lg:px-24  sm:px-16 py-16">
      <div className="flex flex-col md:flex-row items-end justify-between mb-20">
        <div className="flex-1 text-white text-[24px] lg:text-[36px] ">
          <p>An enterprise template to ramp up your company website</p>
        </div>
        <div className="md:flex flex-1 items-center justify-end gap-3 hidden">
          <ReviewArrowButton onClick={scrollPrev} direction="left" />
          <ReviewArrowButton onClick={scrollNext} direction="right" />
        </div>
      </div>
      <div>
        <Carousel
          opts={{ align: "start" }}
          className="w-full"
          setApi={(api) => (carouselRef.current = api)}
        >
          <CarouselContent>
            {Reviews.map((rev, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: ".9", delay: 0.1 + (index / 10) * 2 }}
                  viewport={{ once: true }}
                >
                  <ReviewCardContainer
                    image={rev.image}
                    name={rev.name}
                    role={rev.role}
                    review={rev.review}
                  />
                </MotionDiv>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex md:hidden flex-1 items-center justify-between gap-3 mt-5">
          <ReviewArrowButton onClick={scrollPrev} direction="left" />
          <ReviewArrowButton onClick={scrollNext} direction="right" />
        </div>
      </div>
    </div>
  );
};

export default Review;
