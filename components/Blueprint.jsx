"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
  RiNumber6,
} from "react-icons/ri";

import "react-vertical-timeline-component/style.min.css";

const experiences = [
  {
    id: "1",
    name: "Audit & Analyze",
    description:
      "We start by auditing your business profiles, website, and online presence to identify gaps and opportunities.",
    logo: <RiNumber1 />,
  },
  {
    id: "2",
    name: "Strategy Development",
    description:
      "A personalized strategy is created to align your goals with proven digital marketing and web design tactics.",
    logo: <RiNumber2 />,
  },
  {
    id: "3",
    name: "Design & Development",
    description:
      "We craft visually appealing, user-friendly and high-converting websites tailored to your brand identity and audience needs.",
    logo: <RiNumber3 />,
  },
  {
    id: "4",
    name: "SEO Optimization",
    description:
      "We optimize your website for search engines, ensuring better visibility and higher rankings.",
    logo: <RiNumber4 />,
  },
  {
    id: "5",
    name: "Marketing & Branding",
    description:
      "Boost your online presence with effective social media marketing, paid campaigns, and a standout brand identity.",
    logo: <RiNumber5 />,
  },
  {
    id: "6",
    name: "Launch & Growth Monitoring",
    description:
      "After launching, we track your progress, provide insights, and refine strategies to ensure continuous growth.",
    logo: <RiNumber6 />,
  },
];

const BlueprintCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#10192a",
        color: "#fff",
      }}
      contentArrowStyle={{
        borderRight: "7px solid #d78628",
      }}
      iconStyle={{
        background: "#080e19",
        color: "white",
      }}
      icon={experience.logo}
    >
      <div className="font-raleway">
        <h3 className="text-[17px] sm:text-[19px] md:text-[22px] lg:text-[25px] font-bold text-lightyellow">
          {experience.name}
        </h3>
        <p>{experience.description}</p>
      </div>
    </VerticalTimelineElement>
  );
};

const Blueprint = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center py-20 font-poppins">
        <div className="w-full px-5 sm:px-16 md:px-20 lg:px-24 flex flex-col">
          <h2 className="uppercase text-lightblue tracking-widest flex items-center gap-5">
            Step-by-Step Strategy for Taking Your Business to the Next Level{" "}
            <span className="flex">
              <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />
              <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />
              <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />
              <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />
            </span>
          </h2>
          <h1 className="uppercase bg-[linear-gradient(45deg,#FFD700,#FFB700,#FF8C00)] text-transparent bg-clip-text text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-extrabold">
            The Elite Blueprint to Online Success
          </h1>
        </div>

        <div className="mt-10 w-full px-5 sm:px-16 md:px-20 lg:px-24 ">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <BlueprintCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Blueprint;
