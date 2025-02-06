import ServiceCardContainer from "../ui/ServiceCard";
import { BlogContent } from "../ui/ServiceCard/constants";
import Image from "next/image";
import { Button } from "../ui/button";
import { MotionDiv } from "@/app/framer";

const Blog = () => {
  return (
    <div className="px-5 lg:px-24  sm:px-16 py-16">
      <div className="text-left md:text-center">
        <p className="text-primary-grey mb-3">Our Blog</p>
        <p className="text-[36px] leading-relaxed max-w-screen-sm mx-auto">
          Handshake infographic mass market crowdfunding iteration.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-20 md:gap-14 md:grid-cols-3  lg:gap-24 mt-16">
        {BlogContent.map((blog, Idx) => (
          <MotionDiv
            key={Idx}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: ".9", delay: 0.1 + (Idx / 10) * 2 }}
            viewport={{ once: true }}
          >
            <ServiceCardContainer
              key={blog.id}
              cardImage={blog.cardImage}
              header={blog.header}
              headerSize="text-[12px] font-bold"
              headerHelper={blog.headerHelper}
              body={blog.body}
              bodySize="text-black leading-relaxed w-full lg:max-w-[250px]"
              footer={
                <div className="flex items-center gap-2">
                  <div>
                    <Image
                      src={blog.profileImage}
                      alt={blog.name || "Profile"}
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>{blog.name}</div>
                </div>
              }
            />
          </MotionDiv>
        ))}
      </div>
      <div className="text-center mt-10 lg:mt-20">
        <Button className="text-primary-blue bg-white rounded-3xl px-14  py-6 border-2 border-primary-blue font-bold">
          Load more
        </Button>
      </div>
    </div>
  );
};

export default Blog;
