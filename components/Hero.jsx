import Link from "next/link";

const Hero = () => {
  return (
    <section className="animate-hero w-full h-[800px] relative">
      <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center flex-col text-center px-5">
        <h3
          className={`font-raleway font-bold bg-white/90 px-4 py-1 text-[18px] rounded-2xl mb-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px]`}
        >
          Howdy! We are Elite Verse Agency{" "}
          <span className="inline-block animate-wave origin-[70%]">👋</span>
        </h3>
        <h1
          className={`font-raleway mb-4 text-[30px] sm:text-[40px] md:text-[50px] font-bold uppercase text-[#fff] leading-10 mt-5`}
        >
          It's Our Business To Grow Yours!
        </h1>
        <h2 className="text-[#eee] mb-[30px] text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px]">
          Elite Verse empowers you to grow and monetize your business online
          with our strategies for unstoppable growth!
        </h2>
        <div className="rounded-full bg-mainblue py-3 px-12 hover:bg-mainyellow transition-all">
          <Link
            href="https://calendly.com/shaheeraamir/free-consultation-call"
            className="font-semibold text-[#fff] text-[13px] sm:text-[14px] md:text-[15px]"
          >
            Speak To Our Expert Team <br />
            <span className="text-[11px] sm:text-[12px] md:text-[13px] italic">
              Book Your FREE Audit Call Now!
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
