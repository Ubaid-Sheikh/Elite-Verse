import { TfiLayoutLineSolid } from "react-icons/tfi";
import { FaCheckCircle } from "react-icons/fa";
import { TbXboxXFilled } from "react-icons/tb";
import Image from "next/image";
import 'animate.css';

const Difference = () => {
  const evBenefits = [
    { opt: "No Upfront Cost" },
    { opt: "On-Time Delivery" },
    { opt: "No Maintenance Fee" },
    { opt: "1:1 Personalized Communication" },
    { opt: "SEO Optimized" },
    { opt: "Design and Growth Focus" },
    { opt: "No Hidden Fees" },
  ];

  const others = [
    { opt: "High Upfront Cost" },
    { opt: "Delays in project completion" },
    { opt: "Expensive maintenance" },
    { opt: "Lack of communication" },
    { opt: "No Search Engine Optimization" },
    { opt: "No Growth Focus" },
    { opt: "Unexpected additional fees" },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center py-20 font-poppins text-white">
      <div className="w-full px-5 sm:px-16 md:px-20 lg:px-24 flex flex-col">
        <h2 className="uppercase text-lightblue tracking-widest flex items-center gap-5">
          Why We're Different!{" "}
          <span className="flex">
            <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />
            <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />
            <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />
            <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />
          </span>
        </h2>
        <h1 className="uppercase bg-[linear-gradient(45deg,#FFD700,#FFB700,#FF8C00)] text-transparent bg-clip-text text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-extrabold">
          Choosing the Best Fit for Collaboration
        </h1>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-center gap-10 px-24 justify-center animate__animated animate__zoomIn animate-delay-1s">
        <div className="mt-10 px-10 w-[350px] sm:w-[600px] lg:w-[500px] py-10 bg-bgblue rounded-xl">
          <div className="flex items-center justify-center">
            <Image
              src="/img/ELITE_VERSE.png"
              alt="vs"
              height={200}
              width={200}
            />
          </div>
          <ul className="flex flex-col gap-10 mt-10 py-5  text-[13px]">
            {evBenefits.map((bf, index) => (
              <li key={index} className="flex gap-3 items-center">
                <FaCheckCircle color="#d78628" /> {bf.opt}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center items-center mt-10">
          <Image src="/img/versus.png" alt="human" height={150} width={150} />
        </div>

        <div className="py-10 bg-bgblue rounded-xl mt-10 px-10 w-[350px] sm:w-[600px] lg:w-[500px]">
          <div className="flex flex-col items-center justify-center">
            <Image src="/img/human.png" alt="vs" height={90} width={90} />
            <p className="text-mainyellow font-bold">Other <span className="text-lightblue">Agencies</span></p>
          </div>
          <ul className="flex flex-col gap-10 mt-10 py-5 text-[13px]">
            {others.map((others, index) => (
              <li key={index} className="flex gap-3 items-center">
                <TbXboxXFilled color="#a71212" size={17} /> {others.opt}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Difference;
