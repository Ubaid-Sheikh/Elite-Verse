const Marquee = () => {
  return (
    <div>
      <div className="w-full overflow-hidden whitespace-nowrap bg-mainblue font-bungeeShade py-10">
        <div className="animate-marquee inline-block">
          {Array(10)
            .fill("Where Elite Ideas Meet Exceptional Designs.")
            .map((text, index) => (
              <span
                key={index}
                className="text-white/70 text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px]"
              >
                {text}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
