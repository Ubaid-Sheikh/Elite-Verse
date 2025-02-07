"use client";
import Image from "next/image";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { FaExpand } from "react-icons/fa";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import 'animate.css';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const imgs = [
    {
      url: "/img/portfolio/1.png",
      WebName: "Travel Agency",
      WebService: "Website, SEO, Marketing",
      enlargedImg: "/img/portfolio/Portfolio-Details/Detail-1.png",
    },
    {
      url: "/img/portfolio/2.png",
      WebName: "Car Services",
      WebService: "Website, SEO, Marketing",
      enlargedImg: "/img/portfolio/Portfolio-Details/Detail-2.png",
    },
    {
      url: "/img/portfolio/3.png",
      WebName: "Coffee Cafe",
      WebService: "Website, SEO, Marketing",
      enlargedImg: "/img/portfolio/Portfolio-Details/Detail-3.png",
    },
    {
      url: "/img/portfolio/4.png",
      WebName: "Event Planner",
      WebService: "Website, SEO, Marketing",
      enlargedImg: "/img/portfolio/Portfolio-Details/Detail-4.png",
    },
    {
      url: "/img/portfolio/5.png",
      WebName: "Gym / Fitness",
      WebService: "Website, SEO, Marketing",
      enlargedImg: "/img/portfolio/Portfolio-Details/Detail-5.png",
    },
    {
      url: "/img/portfolio/6.png",
      WebName: "Shopify Store",
      WebService: "Website, Product Hunting, SEO, Marketing",
      enlargedImg: "/img/portfolio/Portfolio-Details/Detail-6.png",
    },
    {
      url: "/img/portfolio/7.png",
      WebName: "Service Providers",
      WebService: "Website, SEO, Marketing",
      enlargedImg: "/img/portfolio/Portfolio-Details/Detail-7.png",
    },
    {
      url: "/img/portfolio/8.png",
      WebName: "E-Commerce Store",
      WebService: "Website, SEO, Marketing",
      enlargedImg: "/img/portfolio/Portfolio-Details/Detail-8.png",
    },
    {
      url: "/img/portfolio/9.png",
      WebName: "Landing Page",
      WebService: "Website, SEO, Marketing",
      enlargedImg: "/img/portfolio/Portfolio-Details/Detail-9.png",
    },
    {
      url: "/img/portfolio/10.png",
      WebName: "Swings E-Commerce Store",
      WebService: "Website, SEO, Marketing",
      enlargedImg: "/img/portfolio/Portfolio-Details/Detail-10.png",
    },
    {
      url: "/img/portfolio/11.png",
      WebName: "Toys Store",
      WebService: "Website, SEO, Marketing",
      enlargedImg: "/img/portfolio/Portfolio-Details/Detail-11.png",
    },
    {
      url: "/img/portfolio/12.png",
      WebName: "Business Website",
      WebService: "Website, SEO, Marketing",
      enlargedImg: "/img/portfolio/Portfolio-Details/Detail-12.png",
    },
  ];


  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsZoomed(true);
  };

  const closeOverlay = () => {
    setIsZoomed(false);
    setSelectedImage(null);
  };

  return (
    <div
      id="our-work"
      className="w-full flex flex-col items-center justify-center py-20 sm:pt-30 md:pt-[230px] lg:pt-[230px] font-poppins"
    >
      <div className="w-full px-5 sm:px-16 md:px-20 lg:px-24 flex flex-col">
        <h2 className="uppercase text-lightblue tracking-widest flex items-center gap-5">
          Portfolio{" "}
          <span className="flex">
            <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />
            <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />
            <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />
            <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />
          </span>
        </h2>
        <h1 className="uppercase bg-[linear-gradient(45deg,#FFD700,#FFB700,#FF8C00)] text-transparent bg-clip-text text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-extrabold">
          Check our Previous Projects!
        </h1>
      </div>

      {/* Portfolio Grid */}
      <div className="w-full px-5 sm:px-16 md:px-20 lg:px-24 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {imgs.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-[20px] cursor-pointer animate__animated animate__zoomIn animate__delay-1s"
            onClick={() => handleImageClick(image)}
          >
            <Image
              src={image.url}
              alt={image.WebName}
              height={500}
              width={500}
              className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300">
              {/* Bottom Left Text */}
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.WebName}
                </h3>
                <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.WebService}
                </p>
              </div>

              {/* Expand Icon */}
              <button
                className="absolute top-4 right-4 bg-white/20 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/40"
                aria-label="Expand Image"
              >
                <FaExpand className="text-white" size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div
        className="px-5 sm:px-16 md:px-20 lg:px-24 mt-5 animate__animated animate__zoomIn animate-delay-1s"
      >
        <video
          className="rounded-[20px]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/img/shopify.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeOverlay}
        >
          <div
            className={`relative w-full h-full transition-all duration-300 ${isZoomed ? "scale-100" : "scale-150"}`}
            onClick={(e) => e.stopPropagation()} // Prevent closing the overlay when clicking the image
          >
            <Image
              src={selectedImage.enlargedImg}
              alt={selectedImage.WebName}
              layout="fill"
              objectFit="contain"
              className="rounded-lg cursor-zoom-in"
            />
            <button
              className="absolute top-4 right-4 rounded-full p-2 hover:bg-white/40"
              onClick={closeOverlay}
              aria-label="Close Overlay"
            >
              <ImCross className="text-white" size={20} />
            </button>
          </div>
        </div>
      )}


    </div>
  );
};

export default Portfolio;
