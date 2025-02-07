import Link from "next/link";

const Hero = () => {
  return (
    <section className="animate-hero w-full h-[800px] relative mt-20">
      <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center flex-col text-center px-5">
        <h3
          className={`font-raleway font-bold bg-white/90 px-7 py-1 rounded-full mb-[20px] sm:text-[13px] md:text-[15px] lg:text-[17px]`}
        >
          Howdy! We are Elite Verse Agency{" "}
          <span className="inline-block animate-wave origin-[70%]">👋</span>
        </h3>
        <h1
          className={`font-raleway mb-4 mt-3 text-[25px] sm:text-[28px] md:text-[36px] lg:text-[46px] font-bold uppercase text-[#fff] leading-10`}
        >
          It's Our Business To Grow Yours!
        </h1>
        <h2 className="text-[#eee] mb-[30px] text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px]">
          Elite Verse empowers you to grow and monetize your business online
          with our strategies for unstoppable growth!
        </h2>
        <div className="rounded-full bg-mainblue py-3 px-16 hover:bg-mainyellow transition-all">
          <Link
            href="https://calendly.com/shaheeraamir/free-consultation-call"
            className="font-semibold text-[#fff] text-[13px] sm:text-[14px] md:text-[15px] lg-[20px]"
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
