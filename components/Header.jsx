"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHandshake, FaBars, FaTimes } from "react-icons/fa";
import Hero from "./Hero";

const Header = () => {
  const [active, setActive] = useState("Home");
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClientOverlayVisible, setIsClientOverlayVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectIdea: '',
  });

  const navItems = [
    { name: "Home", id_location: "#home" },
    { name: "About", id_location: "#about" },
    { name: "Services", id_location: "#services" },
    { name: "Our Work", id_location: "#our-work" },
    { name: "Plans", id_location: "#pricing" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Succesfully Sent")
        setFormData({
          name: '',
          email: '',
          projectIdea: ''
        })
      } else {
        alert("Not Send")
      }
    } catch (error) {
      alert("Error Sending Email")
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleClientClick = (e) => {
    e.preventDefault();
    setIsClientOverlayVisible(true);
  };

  return (
    <>
      <div
        id="home"
        className="h-screen bg-[url('/img/hero.gif')] bg-cover flex flex-col justify-center items-center bg-center bg-fixed relative"
      >
        <header
          className={`animate-navbar fixed top-2 z-50 py-5 rounded-full px-3 sm:px-10 md:px-20 flex justify-between text-[14px] items-center text-white transition-all ${isSticky
            ? "bg-[#2d2f3261] bg-opacity-70 backdrop-blur-md w-[80%]"
            : "bg-transparent w-[90%]"
            }`}
        >
          {/* Logo */}
          <Link href="/">
            <Image
              src="/img/EV-WebsiteLogo-removebg-preview.png"
              alt="Elite Verse Agency Header Logo"
              width={150}
              height={50}
              className="h-[60px] max-h-[40px] md:max-h-[60px] w-auto"
            />
          </Link>

          {/* Desktop Navigation (shows on large screens) */}
          <nav className="hidden lg:flex gap-5 uppercase font-bold">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onClick={() => setActive(item.name)}
              >
                <Link
                  href={item.id_location}
                  className={`relative text-gray-300 scroll-smooth transition-colors duration-300 ${active === item.name ? "text-white" : ""
                    }`}
                >
                  {item.name}
                </Link>
                <span
                  className={`absolute left-0 bottom-[-6px] h-[2px] bg-blue-500 transition-all duration-300 ${active === item.name ? "w-[90%] left-[5%]" : "w-0"
                    } group-hover:w-[90%] group-hover:left-[5%]`}
                ></span>
              </div>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 bg-[#2e5799] px-4 py-3 rounded-full cursor-pointer hover:bg-lightyellow group transition-all">
            <button

              className="font-bold"
              onClick={handleClientClick}
            >
              Become a client
            </button>
            <FaHandshake
              size={20}
              className="text-[#fbb02e] group-hover:text-black transition-colors"
            />
          </div>

          {/* Mobile Menu Button (visible on medium and below) */}
          <button
            className="lg:hidden block text-white text-2xl p-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </header>

        {/* Mobile Menu Overlay (now using lg:hidden to display on medium) */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Menu Sidebar (now using lg:hidden to display on medium) */}
        <div
          className={`fixed top-0 right-0 w-full p-5 h-[95%] mt-5 rounded-2xl bg-bgblue z-50 flex flex-col items-center pt-10 lg:hidden transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-2xl p-2"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>

          {/* Mobile Logo */}
          <div className="flex items-center justify-center mt-10 mb-8">
            <Image
              src="/img/ELITE_VERSE.png"
              alt="Elite Verse Logo"
              height={150}
              width={150}
              className="w-auto h-auto"
            />
          </div>

          {/* Navigation Items */}
          <div className="w-full">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.id_location}
                className="flex w-full text-white py-4 px-6 text-lg border-b border-white/10 hover:bg-white/5 transition-colors"
                onClick={() => {
                  setActive(item.name);
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button (Mobile) */}
          <div className="mt-8">
            <button

              className="text-white font-bold px-6 py-3 bg-[#2e5799] rounded-full hover:bg-blue-600 transition-colors"
              onClick={handleClientClick}
            >
              Become a Client
            </button>
          </div>
        </div>

        <Hero />
      </div>

      {/* Client Overlay */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-[#15222BD9] backdrop-blur-lg z-[999] transform transition-transform duration-300 ease-in-out ${isClientOverlayVisible ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Close Button on the overlay */}
        <button
          onClick={() => setIsClientOverlayVisible(false)}
          aria-label="Close overlay"
          className="absolute top-4 right-4 text-white text-2xl p-2"
        >
          <FaTimes />
        </button>


        <div className="flex h-screen flex-col w-full justify-center items-center p-3">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/img/ELITE_VERSE.png"
              alt="logo"
              height={200}
              width={200}
            />
            <h1 className="text-[25px] text-center lg:text-[35px] font-extrabold text-white font-raleway">
              Bring us your
              Vision, We'll bring it
              to Life
            </h1>
          </div>
          <form className="flex flex-col mt-10 gap-3 px-5">
            <section className="flex md:flex-row flex-col gap-5 text-white">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="p-3 rounded-[1.2rem] bg-darkblue"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="p-3 w-[400px] rounded-[1.2rem] bg-darkblue"
                value={formData.email}
                onChange={handleChange}
              />
            </section>
            <textarea
              cols="30"
              rows="6"
              name="projectIdea"
              className="bg-darkblue rounded-[1.2rem] p-3 text-white"
              placeholder="Your Project Idea"
              value={formData.projectIdea}
              onChange={handleChange}
            />
          </form>
          <div className="flex justify-between md:gap-56 gap-3 sm:p-0 p-3 md:flex-row flex-col items-center mt-5">
            <Link href="mailto:info@elite-verse.com" legacyBehavior>
              <a className="text-white/25 text-[18px] cursor-pointer hover:text-white transition-all">
                info@elite-verse.com
              </a>
            </Link>
            <button className="py-2 px-4 rounded-full bg-mainblue text-white font-bold" onClick={handleSubmit}>
              Let's make it happen
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
