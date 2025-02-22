import person from "../assets/images/person.jpeg";
import { FaQuoteRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  {
    text: "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
    name: "Davida Ayodele",
    role: "CEO, BTH",
    image: person,
  },
  {
    text: "This platform has helped me grow my skills tremendously. I highly recommend it to anyone looking to improve their tech career.",
    name: "Alex Johnson",
    role: "Software Engineer",
    image: person,
  },
  {
    text: "A fantastic community! I have learned so much and connected with amazing people. The courses are top-notch.",
    name: "Jane Doe",
    role: "Data Scientist",
    image: person,
  },
  {
    text: "The support and resources here are unparalleled. I now feel confident in my coding skills.",
    name: "Michael Smith",
    role: "Full-Stack Developer",
    image: person,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1, // Show 1 item on small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-[50px] lg:my-[100px] flex flex-col gap-[10px]">
      <div className="flex flex-col items-center text-center gap-5 lg:gap-[29px] px-[5%]">
        <p className="font-semibold text-xl lg:text-[40px] lg:leading-[60px]">
          Testimonials Of Our <span className="text-[#8300F6]">Workings</span>
        </p>
        <p className="max-w-[664px] text-sm text-[#656565] font-medium lg:text-[20px] lg:leading-[30px]">
          Hear from students who have developed their skills and careers through
          our platform.
        </p>
      </div>

      <div className="relative px-5 lg:px-10">
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="p-3">
              <div className="h-[350px] bg-white shadow-[0px_4px_10.4px_#00000040]  rounded-lg p-6 flex flex-col justify-between">
                <FaQuoteRight size={30} color="#8300F6" />
                <p className="text-[#1E1D1D] text-sm lg:text-base">{item.text}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    className="size-[54px] rounded-full object-cover"
                    alt={item.name}
                  />
                  <div>
                    <p className="font-medium text-[14px] lg:text-[17px]">{item.name}</p>
                    <p className="text-[#606060] text-[12px] lg:text-[14px]">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;