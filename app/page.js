
import About from "@/components/About";
import Blueprint from "@/components/Blueprint";
import CTA from "@/components/CTA";
import Difference from "@/components/Difference";
import Marquee from "@/components/Marquee";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Testimonials from "@/components/testimonials";


const page = () => {
  return (
    <div>
      <Marquee />
      <Services />
      <About />
      <Portfolio />
      <Blueprint />
      <Marquee />
      <Difference />
      <Testimonials />
      <Pricing />
      <Marquee />
      <CTA />
    </div>
  );
};

export default page;
