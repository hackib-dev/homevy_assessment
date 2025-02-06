import { Input } from "../ui/input";
import { Button } from "../ui/button";

const ContactUs = () => {
  return (
    <div className="px-5 lg:px-24 sm:px-16 py-16">
      <div className="relative bg-primary-blue rounded-2xl text-center py-10 md:py-16 text-white bg-[url(../public/images/bgImage.png)] bg-right-top bg-no-repeat bg-[auto_220px]">
        <div className="relative z-10 p-5 md:p-0">
          <p className="text-4xl max-w-xl mx-auto leading-relaxed px-5">
            An enterprise template to ramp up your company website
          </p>
          <div className="flex flex-col md:flex-row gap-5 max-w-lg mx-auto mt-10">
            <Input
              className="text-primary-blue bg-white rounded-3xl px-14  py-6 font-bold placeholder:text-base pl-8 placeholder:text-black placeholder:font-medium"
              placeholder="Your email address"
            />
            <Button className="text-[#0A2640] bg-primary-green rounded-3xl px-14 py-6 font-bold">
              Start Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
