import FaqImage from "@/public/images/faqImage.png";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MotionDiv } from "@/app/framer";

const Faq = () => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: ".9", delay: 0.1 + (1 / 10) * 2 }}
      viewport={{ once: true }}
    >
      <div className=" px-5 lg:px-24  sm:px-16 py-16">
        <div className="mb-10 md:mb-14">
          <Image src={FaqImage} alt="FaqImage" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
          <div>
            <p className="text-[28px] max-w-sm">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </p>
          </div>
          <div className="w-full">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  We connect our customers with the best?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Android research & development rockstar?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default Faq;
