"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { FaCheckCircle } from "react-icons/fa";
import CountUp from "react-countup";
import { VscSmiley } from "react-icons/vsc";
import { GoProjectRoadmap } from "react-icons/go";
import { CiTimer } from "react-icons/ci";
import { GrAchievement } from "react-icons/gr";

const About = () => {
  const [inView, setInView] = useState(false);
  const [counterInView, setCounterInView] = useState(false);
  const sectionRef = useRef(null);

  const about = [
    { value: "Lightning-Fast Web Performance" },
    { value: "Cutting-Edge SEO Solutions" },
    { value: "Competitive Pricing Packages" },
    { value: "Masterful UI/UX Design" },
    { value: "Uncompromising Security Standards" },
    { value: "Extensive Revisions & Testing" },
    { value: "Experience Strategy" },
    { value: "Design Systems + Style Guides" },
    { value: "CMS Implementation" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          setCounterInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div id="about" className="w-full flex flex-col items-center justify-center pt-20 pb-20 font-poppins bg-bgblue relative">
      <div className="w-[90%] lg:w-[80%] md:w-[70%] flex flex-col">
        <h2 className="uppercase text-lightblue tracking-widest flex items-center gap-5">
          About us <span className="flex">
            <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />
            <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />
            <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />
            <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />
          </span>
        </h2>
        <h1 className="uppercase bg-[linear-gradient(45deg,#FFD700,#FFB700,#FF8C00)] text-transparent bg-clip-text text-[36px] lg:text-[42px] md:text-[48px] font-extrabold mt-5">
          Learn about the Best Agency!
        </h1>
      </div>

      <div ref={sectionRef} className={`grid lg:grid-cols-2 grid-rows-1 scroll lg:w-[70%] mt-10 font-raleway transition-all duration-500 ${inView ? "animate-appear-from-bottom" : ""}`}>
        <div className="flex flex-col sm:items-start items-center text-white">
          <Image src="/img/Free Office Logo Mockup.png" alt="about" height={700} width={700} className="rounded-3xl" />
          <button className="mt-5 mb-10 mx-10 lg:mx-0">
            <div className="flex bg-white/15 rounded-full px-5 items-center py-2 w-[300px] gap-3">
              <Image src="/img/done pic.jpg" alt="shaheer" height={50} width={50} className="rounded-full" />
              <div className="flex flex-col">
                <p className="font-bold">Hear from Shaheer</p>
                <p className="text-sm">Founder of Elite Verse</p>
              </div>
            </div>
          </button>
        </div>
        <div className="px-10 text-white text-[15px] lg:text-[18px]">
          <h1>Our elite innovation, premier design, and unwavering commitment to user experience distinguish us as the top choice.</h1>
          <ul className="flex flex-col gap-5 mt-5">
            {about.map((opt, index) => (
              <span key={index} className="flex gap-2 items-center">
                <FaCheckCircle color="#d78628" /> <li>{opt.value}</li>
              </span>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-[80%] mt-10 bg-mainblue rounded-3xl text-[10px] sm:text-[14px] md:text-[16px] lg:text-[20px] font-bold text-white py-10 lg:py-20 px-3 lg:px-0">
        {[{ icon: <VscSmiley />, text: "Happy Clients", end: 10 }, { icon: <GoProjectRoadmap />, text: "Projects", end: 20 }, { icon: <CiTimer />, text: "Experience", end: 3 }, { icon: <GrAchievement />, text: "Satisfaction Rate", end: 100 }].map((stat, index) => (
          <div key={index} className="flex flex-col justify-center text-center items-center gap-1">
            <div className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px]">{stat.icon}</div>
            {counterInView && <CountUp start={0} end={stat.end} duration={2} delay={0} className="text-[15px] sm:text-[20px] md:text-[30px] lg:text-[60px]" />}
            <p>{stat.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
