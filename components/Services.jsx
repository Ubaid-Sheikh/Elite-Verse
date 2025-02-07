"use client";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import Image from "next/image";

const Services = () => {
  const services = [
    { name: "Web Design", logo: "/img/website.png" },
    { name: "Web Development", logo: "/img/front-end-programming.png" },
    { name: "SEO", logo: "/img/seo.png" },
    { name: "Social Media Marketing", logo: "/img/front-end-programming.png" },
    { name: "Ecommerce Stores", logo: "/img/website.png" },
    { name: "UI/UX Designs", logo: "/img/front-end-programming.png" },
  ];

  return (
    <div id="services" className="w-full flex flex-col items-center py-20 font-poppins">
      <div className="w-full px-5 sm:px-16 md:px-20 lg:px-24 flex flex-col">
        <h2 className="uppercase text-lightblue tracking-widest flex items-center gap-5">
          What we offer{" "}
          <span className="flex">
            <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />
            <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />
            <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />
            <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />
          </span>
        </h2>
        <h1 className="uppercase bg-[linear-gradient(45deg,#FFD700,#FFB700,#FF8C00)] text-transparent bg-clip-text text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-extrabold">
          Services we can help you with!
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full lg:px-20 md:px-14 sm:px-10 px-8 gap-6 mt-10 font-raleway">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#10192a] px-8 py-11 rounded-3xl shadow flex text-center items-center justify-center hover:shadow-yellow-600 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="text-[20px] sm:text-[22px] md:text-[25px] font-semibold text-[#fbb02e] flex justify-center items-center flex-col gap-3">
              <Image src={service.logo} height={80} width={80} alt={service.name} />
              <h1>{service.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
