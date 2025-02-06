import ContactUs from "@/components/ContactUs";
import Faq from "@/components/Faqs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Blog from "@/components/OurBlog";
import OurServices from "@/components/OurServices";
import Review from "@/components/Review";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <OurServices />
      <Review />
      <Faq />
      <Blog />
      <ContactUs />
      <Footer />
    </div>
  );
}
