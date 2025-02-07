const Marquee = () => {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap bg-mainblue font-bungeeShade py-2">
      <div className="animate-marquee inline-block">
        {Array(10)
          .fill("Where Elite Ideas Meet Exceptional Designs.")
          .map((text, index) => (
            <span
              key={index}
              className="text-transparent text-[60px] italic customMarquee sm:text-[65px] md:text-[80px] lg:text-[90px]"
            >
              {text}
            </span>
          ))}
      </div>
    </div>
  );
};

export default Marquee;
