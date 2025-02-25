import ayoola from "../assets/testimonials/ayoola.jpeg";
import owoade from "../assets/testimonials/owoade.jpeg";
import jason from "../assets/testimonials/jason.jpeg";
import jesse from "../assets/testimonials/jesse.jpeg";
import { FaQuoteRight } from "react-icons/fa";

const items = [
  {
    text: "Bowen Tech Hub has helped me to improve on my design skills in just a few months learning and collaborating with new minds. I was able to learn different ways of achieving designs and the importance of team work. Networking was another thing that helped in improving my design journey.",
    name: "Ayoola Ceilia",
    role: "Graphics Designer",
    image: ayoola,
  },
  {
    text: "Bowen Tech Hub helped me grow in tech. I learned frontend development and got hands-on experience working on real projects that boosted my portfolio and CV. Those projects opened doors I never thought possible. I also met amazing people who supported and inspired me throughout my journey.",
    name: "Owoade habeeb",
    role: "Solar Survey AI",
    image: owoade,
  },
  {
    text: "Joining Bowen Tech Hub in 2022 launched my UI/UX journey, providing hands-on learning, mentorship, and collaboration. This foundation in Product Design led to my role as Product Design Lead for Google Developer Group, Bowen University.",
    name: "Ohahuru Jason,",
    role: "Product design lead, GDGC Bowen University",
    image: jason,
  },
  {
    text: "Joining Bowen Tech Hub as Head of Graphic Design and Lead Instructor was a pivotal moment in my career. Leading and mentoring a team sharpened my skills while teaching me leadership, communication, and teamwork.",
    name: "Jesse Osifade",
    role: "Head, graphic design team, Ha-shem Limited",
    image: jesse,
  },
];

const Testimonials = () => {
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
      <div className="flex gap-5 lg:gap-[40px] overflow-x-scroll snap-x snap-mandatory snap-always p-[10px] ">
        {items.map((item, index) => (
          <div
            key={index}
            className="snap-center min-h-[478px] min-w-[345px] max-h-[478px] max-w-[345px] border bg-[#FFFFFF] shadow-[0px_4px_10.4px_#00000040] rounded-[10px] lg:min-w-[629px] lg:min-h-[352px] lg:max-w-[629px] lg:max-h-[352px] py-[26px] px-[37px] lg:px-[45px]"
          >
            <div className="flex flex-col justify-between h-full">
              <FaQuoteRight size={30} color="#8300F6" />
              <p className="text-[#1E1D1D]">{item.text}</p>
              <div className="flex items-center gap-[18.5px]">
                <img
                  src={item.image}
                  className="size-[54px] min-w-[54px] min-h-[54px] rounded-full object-cover "
                />
                <div className="flex flex-col gap-[2px]">
                  <p className="font-medium text-[14px] leading-[29px] lg:text-[17px] capitalize">
                    {item.name}
                  </p>
                  <p className="text-[#606060] text-[12px] leading-[29px] lg:text-[14px] capitalize">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
