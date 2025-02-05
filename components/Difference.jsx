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
      <div className="lg:w-[70%] w-[90%] flex flex-col">
        <h2 className="uppercase text-lightblue tracking-widest flex items-center gap-5">
          Why We're Different{" "}
          <span className="flex">
            <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />{" "}
            <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />
            <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />{" "}
            <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />
          </span>
        </h2>
        <h1 className="uppercase bg-[linear-gradient(45deg,#FFD700,#FFB700,#FF8C00)] text-transparent bg-clip-text lg:text-[42px] text-[30px] font-extrabold">
          Choosing the Best Fit for Collaboration
        </h1>
      </div>

      <div className="lg:w-[70%] w-[90%] lg:grid lg:grid-cols-5 lg:grid-rows-1 flex flex-col gap-5 lg:gap-4 animate__animated animate__zoomIn animate-delay-1s">
        <div className="col-span-2 mt-10 py-10 bg-bgblue rounded-xl">
          <div className="flex items-center justify-center">
            <Image
              src="/img/ELITE_VERSE.png"
              alt="vs"
              height={300}
              width={300}
            />
          </div>
          <ul className="py-10 lg:px-20 px-5 flex flex-col gap-10 lg:text-[20px] text-[19px]">
            {evBenefits.map((bf, index) => (
              <li key={index} className="flex gap-3 items-center">
                <FaCheckCircle color="#d78628" /> {bf.opt}
              </li>
            ))}
          </ul>
        </div>

        <div className=" lg:col-span-1 col-span-2 lg:mt-10 flex justify-center items-center">
          <Image src="/img/versus.png" alt="human" height={200} width={200} />
        </div>

        <div className=" col-span-2 py-10 lg:mt-10 bg-bgblue rounded-xl">
          <div className="flex items-center justify-center">
            <Image src="/img/human.png" alt="vs" height={150} width={150} />
          </div>
          <ul className="py-10 lg:px-20 px-5 flex flex-col gap-10 mt-5 lg:text-[20px] text-[19px]">
            {others.map((bf, index) => (
              <li key={index} className="flex gap-3 items-center">
                <TbXboxXFilled size={25} color="#a71212" /> {bf.opt}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Difference;
