"use client";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
import { TbXboxXFilled } from "react-icons/tb";
import 'animate.css';


const pricingPlans = [
  {
    planName: "The Launch Plan",
    planPrice: "$999",
    planBenefits: [
      { benefit: "Web design & Development", icon: <FaCheckCircle color="#2e5799" /> },
      { benefit: "Basic SEO", icon: <FaCheckCircle color="#2e5799" /> },
      { benefit: "Maintenance", icon: <FaCheckCircle color="#2e5799" /> },
      { benefit: "Google Profile Optimization", icon: <FaCheckCircle color="#2e5799" /> },

      { benefit: "Advanced SEO", icon: <TbXboxXFilled color="#8B0000" size={15} /> },
      { benefit: "AI Chatbots", icon: <TbXboxXFilled color="#8B0000" size={15} /> },
      { benefit: "Paid Ads Management", icon: <TbXboxXFilled color="#8B0000" size={15} /> },
      { benefit: "Social Media Strategy", icon: <TbXboxXFilled color="#8B0000" size={15} /> },
    ],
  },
  {
    planName: "The Growth Plan",
    planPrice: "$1499",
    planBenefits: [
      { benefit: "Web design & Development", icon: <FaCheckCircle color="#2e5799" /> },
      { benefit: "Basic SEO", icon: <FaCheckCircle color="#2e5799" /> },
      { benefit: "Maintenance", icon: <FaCheckCircle color="#2e5799" /> },
      { benefit: "Google Profile Optimization", icon: <FaCheckCircle color="#2e5799" /> },

      { benefit: "Advanced SEO", icon: <FaCheckCircle color="#2e5799" /> },
      { benefit: "AI Chatbots", icon: <FaCheckCircle color="#2e5799" /> },
      { benefit: "Paid Ads Management", icon: <TbXboxXFilled color="#8B0000" size={15} /> },
      { benefit: "Social Media Strategy", icon: <TbXboxXFilled color="#8B0000" size={15} /> },
    ],
  },
  {
    planName: "The Elite Plan",
    planPrice: "$2299",
    planBenefits: [
      { benefit: "Web design & Development", icon: <FaCheckCircle color="#2e5799" /> },
      { benefit: "Basic SEO", icon: <FaCheckCircle color="#2e5799" /> },
      { benefit: "Maintenance", icon: <FaCheckCircle color="#2e5799" /> },
      { benefit: "Google Profile Optimization", icon: <FaCheckCircle color="#2e5799" /> },

      { benefit: "Advanced SEO", icon: <FaCheckCircle color="#2e5799" /> },
      { benefit: "AI Chatbots", icon: <FaCheckCircle color="#2e5799" /> },
      { benefit: "Paid Ads Management", icon: <FaCheckCircle color="#2e5799" /> },
      { benefit: "Social Media Strategy", icon: <FaCheckCircle color="#2e5799" /> },
    ],
  },
];




const Pricing = () => {
  return (
    <div id="pricing" className="w-full flex flex-col items-center justify-center py-20 font-poppins text-white">
      <div className="w-full px-5 sm:px-16 md:px-20 lg:px-24 flex flex-col">
        <h2 className="uppercase text-lightblue tracking-widest flex items-center gap-5">
          Choose your Growth Plan!{" "}
          <span className="flex">
            <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />
            <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />
            <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />
            <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />
          </span>
        </h2>
        <h1 className="uppercase bg-[linear-gradient(45deg,#FFD700,#FFB700,#FF8C00)] text-transparent bg-clip-text text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-extrabold">
          Get Top-Tier Digital Growth for your business
        </h1>
      </div>

      <div className="w-full px-5 sm:px-8 md:px-16 lg:px-24 flex lg:flex-row flex-col justify-between">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="py-20 mt-10 bg-bgblue rounded-xl flex flex-col duration-300 ease-in-out animate__animated animate__zoomIn animate-delay-1s w-full sm:w-full lg:w-[350px]"
          >
            <div className="flex justify-center items-center flex-col bg-[linear-gradient(45deg,#FFD700,#FFB700,#FF8C00)] text-transparent bg-clip-text font-bold">
              <h1 className="text-[22px] italic">{`"${plan.planName}"`}</h1>
              <p className="text-[65px] price">{plan.planPrice}</p>
            </div>
            <ul className="mt-10 flex flex-col gap-7 px-10 text-[15px]">
              {plan.planBenefits.map((benefits, index) => (
                <li key={index} className="flex items-center gap-3">
                  {benefits.icon} {benefits.benefit}
                </li>
              ))}
            </ul>
            <div className="flex justify-center items-center">
              <Link
                href="https://calendly.com/shaheeraamir/free-consultation-call"
                className="font-bold bg-mainblue mt-10 rounded-3xl py-3 px-10 hover:bg-lightyellow transition-all ease-in-out"
              >
                Get Started
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
