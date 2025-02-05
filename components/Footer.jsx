import { MdArrowForwardIos } from "react-icons/md";
import { FaFacebook, FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const impLinks = [
  { name: "Home", location: "#home" },
  { name: "About us", location: "#about" },
  { name: "Services", location: "#services" },
  { name: "Our Work", location: "#our-work" },
  { name: "Plans", location: '#pricing' },
];

const exploreMore = [
  { name: "Web Development" },
  { name: "E-Commerce Stores" },
  { name: "UI/UX Designs" },
  { name: "Social Media Marketing" },
  { name: "SEO" },
];

const Footer = () => {
  return (
    <div className="w-full px-4 md:px-8">
      <div className="flex flex-col justify-center items-center w-full lg:w-[70%] m-auto text-white gap-8 lg:gap-0">
        <div className="flex gap-8 text-white/50">
          {impLinks.map((link, index) => (
            <Link href={link.location} key={index}>{link.name}</Link>
          ))}
        </div>
        {/* First Column */}
        <div className="flex flex-col justify-center items-center gap-5 mt-5">
          <div className="relative w-[150px]">
            <Image
              src="/img/EV-WebsiteLogo-removebg-preview.png"
              alt="Elite Verse Agency Header Logo"
              width={150}
              height={50}
              className="w-full h-auto"
            />
          </div>
          <p className="max-w-xl text-center">
            Our elite innovation, premier design, and unwavering commitment to
            user experience distinguish us as the top choice.
          </p>
          <div className="flex gap-3 flex-wrap">
            {/* Social icons */}
            {[FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp].map((Icon, index) => (
              <div
                key={index}
                className="bg-white/10 h-[35px] w-[35px] flex items-center justify-center rounded-md hover:bg-yellow-600 transition-all cursor-pointer"
              >
                <Icon size={22} />
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
};

export default Footer;