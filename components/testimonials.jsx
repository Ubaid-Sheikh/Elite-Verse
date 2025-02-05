import { TfiLayoutLineSolid } from "react-icons/tfi";
import Image from "next/image";
import 'animate.css';

const testimonials = [
  {
    name: "Emily Hart",
    from: "Reinsync",
    remarks:
      "Big shoutout to Shaheer for giving our horse lovers’ store a glow-up! The website is sleek, fast, and totally captures that equestrian vibe. Customers are loving how easy it is to find their fav products, and we’re getting so much positive feedback. If you’re looking to take your online biz to the next level, Shaheer’s the GOAT!",
  },
  {
    name: "Bella Carter",
    from: "GothicHeaven",
    remarks:
      "Okay, first of all, Shaheer totally nailed the edgy vibe of our brand. The website screams gothic style while still being super user-friendly. It’s literally the perfect balance of aesthetics and function. Sales have gone up, and customers can’t stop hyping it up. This guy just gets it. Trust him with your brand; you won’t regret it.",
  },
  {
    name: "Tyler Jenkins",
    from: "Web Medicine Care",
    remarks:
      "Massive love to Shaheer for making our blog site pop! It’s so easy to use, and the layout is fresh and modern. Readers keep telling us how good the site looks, and it’s all thanks to Shaheer’s magic. If you want a blog that’s clean, fast, and super cool, this is your guy. Highly recommend!",
  },
  {
    name: "Jake Miller",
    from: "AktivFits",
    remarks:
      "Yo, Shaheer crushed it with our sportswear site! The design is on point, and it’s so smooth to browse and shop, even when I’m half asleep after gym days. Customers are vibing with how clean and fast it is. This guy’s a wizard with websites, don’t sleep on him!",
  },
  {
    name: "Nadir Ali",
    from: "Dastan Weddings",
    remarks:
      "Yo, shoutout to Elite Verse for the dope website they hooked us up with. No cap, they totally nailed our wedding photography site. The vibes are immaculate, and the design is super sleek. Everyone's been saying how lit our site looks! If you need a web design squad that gets it, Elite Verse is the move. 10/10 recommend!",
  },
  {
    name: "Rizwan Naeem",
    from: "Oxygen Gym",
    remarks:
      "Big thanks to Shaheer for the fire gym website!. It’s clean, fresh, and so easy to use. The design is on point and it’s bringing in new members like crazy. Shaheer really understood our vibe and turned it into something epic. The user experience is smooth, and we’ve gotten tons of compliments on how slick everything looks. If you need someone who gets your vision and makes it happen, Shaheer’s your guy. 100% recommend!",
  },
  {
    name: "Ehtisham Javed",
    from: "Travel Destination",
    remarks:
      "We couldn't be happier with the travel agency website Shaheer designed for us. The layout is professional, visually stunning, and incredibly user-friendly. Our clients have praised the seamless booking process and the beautiful design that truly captures the essence of our travel packages. Shaheer was attentive to our needs and delivered a site that exceeded our expectations. Highly recommend his services for anyone looking to elevate their online presence.",
  },
  {
    name: "Christopher",
    from: "Hazaq Logistics",
    remarks:
      "Shoutout to Shaheer for totally revamping our logistics service website!. The new design is slick and super user-friendly. Our clients love the easy navigation and cool features. Shaheer really nailed our brand vibe and made everything look so fresh. If you need a website that stands out and gets the job done, hit up Shaheer. He’s the real deal!",
  },
  {
    name: "Saleha Saghir",
    from: "Bazaar",
    remarks:
      "Massive thanks to Shaheer for transforming our local e-commerce store's website! The design is straight-up fire and makes shopping a breeze. Our customers are loving the smooth interface and fresh look. Shaheer totally got our vision and brought it to life. If you need a website that’s both stylish and functional, Shaheer’s the best. Highly recommend! ",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-20 font-poppins text-white">
      <div className="sm:w-[70%] w-[90%] flex flex-col">
        <h2 className="uppercase text-lightblue tracking-widest flex items-center gap-5">
          Client Reviews{" "}
          <span className="flex">
            <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />{" "}
            <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />
            <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />{" "}
            <TfiLayoutLineSolid className="text-[#fbb02e]" size={30} />
          </span>
        </h2>
        <h1 className="uppercase bg-[linear-gradient(45deg,#FFD700,#FFB700,#FF8C00)] text-transparent bg-clip-text sm:text-[42px] text-[30px] font-extrabold">
          Hear from our satisfied clients!
        </h1>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 p-4 sm:w-[70%] w-[90%] space-y-4 mt-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-bgblue px-6 py-12 rounded-lg flex flex-col relative break-inside-avoid animate__animated animate__zoomIn animate-delay-1s"
          >
            <div className="flex items-center mb-4 justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src="/img/man-client.jpg"
                  height={40}
                  width={40}
                  alt="img"
                  className="rounded-full"
                />
                <h3 className="text-mainyellow font-bold text-[20px]">
                  {testimonial.name}
                </h3>
              </div>
              <p className="text-lightblue font bold text-[15px]">{testimonial.from}</p>
            </div>
            <p className="">{testimonial.remarks}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
