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
import Link from "next/link";
import { ImCross } from "react-icons/im"

const About = () => {
  const [inView, setInView] = useState(false);
  const [counterInView, setCounterInView] = useState(false);
  const sectionRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);

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
    <div id="about" className="w-full flex flex-col items-center justify-center pt-20 pb-20 md:pb-52 font-poppins bg-bgblue relative">
      <div className="w-full px-5 sm:px-16 md:px-20 lg:px-24 flex flex-col">
        <h2 className="uppercase text-lightblue tracking-widest flex items-center gap-5">
          About us{" "}
          <span className="flex">
            <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />
            <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />
            <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />
            <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />
          </span>
        </h2>
        <h1 className="uppercase bg-[linear-gradient(45deg,#FFD700,#FFB700,#FF8C00)] text-transparent bg-clip-text text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-extrabold">
          Learn About the Best Agency!
        </h1>
      </div>

      <div ref={sectionRef} className={`grid lg:grid-cols-2 grid-rows-1 w-full px-8 sm:px-10 md:px-16 lg:px-24 mt-10 font-raleway transition-all duration-500`}>
        <div className="flex flex-col text-white items-center lg:items-start">
          <Image src="/img/Free Office Logo Mockup.png" alt="about" height={700} width={700} className="rounded-3xl w-full" />
          <button className="mt-5 lg:mt-2" onClick={() => { setModalOpen(true) }}>
            <div className="flex bg-white/15 rounded-full px-5 items-center py-2 w-[300px] gap-3">
              <Image src="/img/done pic.jpg" alt="shaheer" height={50} width={50} className="rounded-full" />
              <div className="flex flex-col">
                <p className="font-bold">Hear from Shaheer</p>
                <p className="text-sm">Founder of Elite Verse</p>
              </div>
            </div>
          </button>
        </div>
        <div className="px-5 text-white pt-5">
          <h1>Our elite innovation, premier design, and unwavering commitment to user experience distinguish us as the top choice.</h1>
          <ul className="flex flex-col gap-2 mt-5">
            {about.map((opt, index) => (
              <span key={index} className="flex gap-2 items-center">
                <FaCheckCircle color="#d78628" /> <li>{opt.value}</li>
              </span>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute lg:bottom-[-140px] md:bottom-[-180px] hidden md:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 w-[90%] mt-10 bg-mainblue rounded-[30px] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] text-white py-12 px-5">
        {[{ icon: <VscSmiley />, text: "Happy Clients", end: 10 }, { icon: <GoProjectRoadmap />, text: "Projects", end: 20 }, { icon: <CiTimer />, text: "Experience", end: 3 }, { icon: <GrAchievement />, text: "Satisfaction Rate", end: 100 }].map((stat, index) => (
          <div key={index} className="flex flex-col justify-center text-center items-center gap-1">
            <div className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px]">{stat.icon}</div>
            {counterInView && <CountUp start={0} end={stat.end} duration={2} delay={0} className="font-bold text-[15px] sm:text-[20px] md:text-[30px] lg:text-[60px]" />}
            <p className="text-[13px]">{stat.text}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Darkened Background */}
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setModalOpen(false)}
          ></div>
          {/* Modal Content */}
          <div className="bg-darkblue rounded-lg p-6 z-10 max-w-[800px] w-full font-raleway flex flex-col gap-4 animate__animated animate__fadeInDown animate-delay-1s">
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold mb-4 text-lightyellow">Why We Are The Ultimate Choice ?</h2>
              <button onClick={() => { setModalOpen(false) }}><ImCross color="#fff" /></button>
            </div>
            <p className="mb-4 italic text-white text-[15px] font-medium leading-normal">
              "At Elite Verse, we pride ourselves on delivering results that go beyond average—we deliver at an elite level. Our expertise spans website development, personal branding, social media marketing, SEO, and UI-UX design. In today’s digital world, a strong online presence is crucial for success, and we are dedicated to helping you achieve just that.<br />
              Our team of highly skilled professionals is committed to creating websites that not only look stunning but also function seamlessly. We believe in the power of a well-crafted online presence, which is why we offer personalized branding strategies that resonate with your target audience. From engaging social media campaigns to effective SEO tactics, we ensure that your brand stands out. <br />
              At Elite Verse, we take a client-first approach. We listen, understand your unique needs, and provide solutions that are tailored specifically for you. Our UI-UX designs ensure a smooth and enjoyable experience that keeps visitors coming back. <br />
              We are not just a service provider; we are your partners in growth. Our goal is to see your business thrive, bringing the expertise, creativity, and dedication to make it happen. Trust us to elevate your digital presence with results that are truly elite.<br />
              Thank you for considering Elite Verse. We look forward to working with you and turning your vision into reality. Book a free consultation call with me today, and let’s start your journey to success."
            </p>
            <hr />
            <div className="flex items-center justify-center">
              <Link
                href="https://calendly.com/shaheeraamir/free-consultation-call"
                onClick={() => setModalOpen(false)}
                className="bg-mainblue font-bold hover:bg-lightyellow transition-all text-white py-2 px-4 rounded-full w-[300px] text-center"
              >
                Book a Free Consultation Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>


  );
};

export default About;
