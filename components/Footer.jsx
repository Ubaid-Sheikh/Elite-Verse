
import { FaFacebook, FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";


const Footer = () => {

  const icons = [
    {
      icon: FaFacebook,
      link: "https://www.facebook.com/profile.php?id=61562747960704&mibextid=ZbWKwL"
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/eliteverseagency?igsh=MWF3MGQ0NGhmbTVvOA=="
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/company/elite-verse-agency/"
    },
    {
      icon: FaWhatsapp,
      link: "https://wa.me/923141574996"
    }
  ]
  return (
    <div className="w-full px-4 md:px-8">
      <div className="flex flex-col justify-center items-center w-full lg:w-[70%] m-auto text-white gap-8 lg:gap-0">
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
            {icons.map((Icon, index) => (
              <Link href={Icon.link} target="blank" key={index}>
                <div
                  className="bg-white/10 h-[35px] w-[35px] flex items-center justify-center rounded-md hover:bg-yellow-600 transition-all cursor-pointer"
                >
                  <Icon.icon size={22} />
                </div>
              </Link>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
};

export default Footer;