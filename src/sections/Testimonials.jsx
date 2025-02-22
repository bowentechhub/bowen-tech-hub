import person from "../assets/images/person.jpeg";
import { FaQuoteRight } from "react-icons/fa";

const items = [
  {
    text: "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the bestto be more than my expectations and so far there have been no problems. LaslesVPN always the best  more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
    name: "Davida Ayodele",
    role: "CEO, BTH",
    image: person,
  },
  {
    text: "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the bestto be more than my expectations and so far there have been no problems. LaslesVPN always the best  more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
    name: "Davida Ayodele",
    role: "CEO, BTH",
    image: person,
  },
  {
    text: "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the bestto be more than my expectations and so far there have been no problems. LaslesVPN always the best  more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
    name: "Davida Ayodele",
    role: "CEO, BTH",
    image: person,
  },
  {
    text: "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the bestto be more than my expectations and so far there have been no problems. LaslesVPN always the best  more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
    name: "Davida Ayodele",
    role: "CEO, BTH",
    image: person,
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
                  className="size-[54px] rounded-full object-cover "
                />
                <div className="flex flex-col gap-[2px]">
                  <p className="font-medium text-[14px] leading-[29px] lg:text-[17px]">
                    {item.name}
                  </p>
                  <p className="text-[#606060] text-[12px] leading-[29px] lg:text-[14px]">
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
