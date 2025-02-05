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
      { benefit: "Google Business Profile Optimization", icon: <FaCheckCircle color="#2e5799" /> },
      { benefit: "Social Media Management & Optimization", icon: <FaCheckCircle color="#2e5799" /> },
      { benefit: "Advanced SEO", icon: <TbXboxXFilled color="#8B0000" size={20} /> },
      { benefit: "AI Chatbots", icon: <TbXboxXFilled color="#8B0000" size={20} /> },
      { benefit: "Paid Ads Management", icon: <TbXboxXFilled color="#8B0000" size={20} /> },
      { benefit: "Advanced Social Media Strategy", icon: <TbXboxXFilled color="#8B0000" size={20} /> },
    ],
  },
  {
    planName: "The Growth Plan",
    planPrice: "$1499",
    planBenefits: [
      { benefit: "Web design & Development", icon: <FaCheckCircle color="#2e5799" /> },
      { benefit: "Basic SEO", icon: <FaCheckCircle color="#2e5799" /> },
      { benefit: "Maintenance", icon: <FaCheckCircle color="#2e5799" /> },
      { benefit: "Google Business Profile Optimization", icon: <FaCheckCircle color="#2e5799" /> },
      { benefit: "Social Media Management & Optimization", icon: <FaCheckCircle color="#2e5799" /> },
      { benefit: "Advanced SEO", icon: <FaCheckCircle color="#2e5799" /> },
      { benefit: "AI Chatbots", icon: <FaCheckCircle color="#2e5799" /> },
      { benefit: "Paid Ads Management", icon: <TbXboxXFilled color="#8B0000" size={20} /> },
      { benefit: "Advanced Social Media Strategy", icon: <TbXboxXFilled color="#8B0000" size={20} /> },
    ],
  },
  {
    planName: "The Elite Plan",
    planPrice: "$2299",
    planBenefits: [
      { benefit: "Web design & Development", icon: <FaCheckCircle color="#2e5799" /> },
      { benefit: "Basic SEO", icon: <FaCheckCircle color="#2e5799" /> },
      { benefit: "Maintenance", icon: <FaCheckCircle color="#2e5799" /> },
      { benefit: "Google Business Profile Optimization", icon: <FaCheckCircle color="#2e5799" /> },
      { benefit: "Social Media Management & Optimization", icon: <FaCheckCircle color="#2e5799" /> },
      { benefit: "Advanced SEO", icon: <FaCheckCircle color="#2e5799" /> },
      { benefit: "AI Chatbots", icon: <FaCheckCircle color="#2e5799" /> },
      { benefit: "Paid Ads Management", icon: <FaCheckCircle color="#2e5799" /> },
      { benefit: "Advanced Social Media Strategy", icon: <FaCheckCircle color="#2e5799" /> },
    ],
  },
];




const Pricing = () => {
  return (
    <div id="pricing" className="w-full flex flex-col items-center justify-center py-20 font-poppins text-white">
      <div className="lg:w-[70%] w-[90%] flex flex-col">
        <h2 className="uppercase text-lightblue tracking-widest flex items-center gap-5">
          Choose Your Growth Path{" "}
          <span className="flex">
            <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />{" "}
            <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />
            <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />{" "}
            <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />
          </span>
        </h2>
        <h1 className="uppercase bg-[linear-gradient(45deg,#FFD700,#FFB700,#FF8C00)] text-transparent bg-clip-text lg:text-[42px] text-[30px] font-extrabold">
          Get Top-Tier Digital Growth for your business
        </h1>
      </div>

      <div className="lg:w-[80%] w-[90%] lg:grid lg:grid-cols-3 lg:grid-rows-1 flex flex-col lg:gap-10 gap-4">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="py-20 mt-10 bg-bgblue rounded-xl flex flex-col transform transition-transform duration-300 ease-in-out hover:scale-105 animate__animated animate__zoomIn animate-delay-1s"
          >
            <div className="flex justify-center items-center flex-col bg-[linear-gradient(45deg,#FFD700,#FFB700,#FF8C00)] text-transparent bg-clip-text font-bold">
              <h1 className="lg:text-[25px] text-[20px] italic">{`"${plan.planName}"`}</h1>
              <p className="lg:text-[100px] text-[80px]">{plan.planPrice}</p>
            </div>
            <ul className="lg:px-10 px-4 mt-10 flex flex-col gap-10 text-[17px]">
              {plan.planBenefits.map((benefits, index) => (
                <li key={index} className="flex items-center gap-3">
                  {benefits.icon} {benefits.benefit}
                </li>
              ))}
            </ul>
            <div className="flex justify-center items-center">
              <Link
                href="https://calendly.com/shaheeraamir/free-consultation-call"
                className="bg-mainblue mt-10 rounded-3xl py-3 px-10"
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
