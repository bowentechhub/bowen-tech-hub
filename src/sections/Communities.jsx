import fed from "../assets/communities/fed.png";
import software from "../assets/communities/software.png";
import graphics from "../assets/communities/graphics.png";
import dataScience from "../assets/communities/data-science.png";
import bed from "../assets/communities/bed.png";
import cyb from "../assets/communities/cyb.jpeg";
import product from "../assets/communities/product.jpeg";
import productManagement from "../assets/communities/productManagement.jpeg";
import Button from "../components/Button";
import { useModal } from "../hooks/useModal";
import { useCommunity } from "../hooks/useCommunity";

const Communities = () => {
  const comms = [
    {
      image: fed,
      name: "Front-End Development",
      description:
        "Drawing from their extensive industry experience, they will demystify complex concepts, provide insights, and offer guidance to nurture your skills. Get ready to unlock your full potential as you embark on this transformative learning experience.",
    },
    {
      image: dataScience,
      name: "Data Science/AI",
      description:
        "Drawing from their extensive industry experience, they will demystify complex concepts, provide insights, and offer guidance to nurture your skills. Get ready to unlock your full potential as you embark on this transformative learning experience.",
    },
    {
      image: bed,
      name: "Back-End Development",
      description:
        "Drawing from their extensive industry experience, they will demystify complex concepts, provide insights, and offer guidance to nurture your skills. Get ready to unlock your full potential as you embark on this transformative learning experience.",
    },
    {
      image: graphics,
      name: "Graphics Design",
      description:
        "Drawing from their extensive industry experience, they will demystify complex concepts, provide insights, and offer guidance to nurture your skills. Get ready to unlock your full potential as you embark on this transformative learning experience.",
    },
    {
      image: software,
      name: "Software Engineering",
      description:
        "Drawing from their extensive industry experience, they will demystify complex concepts, provide insights, and offer guidance to nurture your skills. Get ready to unlock your full potential as you embark on this transformative learning experience.",
    },
    {
      image: cyb,
      name: "Cyber Security",
      description:
        "Drawing from their extensive industry experience, they will demystify complex concepts, provide insights, and offer guidance to nurture your skills. Get ready to unlock your full potential as you embark on this transformative learning experience.",
    },
    {
      image: product,
      name: "Product Design",
      description:
        "Drawing from their extensive industry experience, they will demystify complex concepts, provide insights, and offer guidance to nurture your skills. Get ready to unlock your full potential as you embark on this transformative learning experience.",
    },
    {
      image: productManagement,
      name: "Project Management",
      description:
        "Drawing from their extensive industry experience, they will demystify complex concepts, provide insights, and offer guidance to nurture your skills. Get ready to unlock your full potential as you embark on this transformative learning experience.",
    },
  ];
  const { openModal } = useModal();
  const { setSelectedCommunity } = useCommunity();
  const selectCommunity = (value) => {
    setSelectedCommunity(value);
    openModal();
  };

  return (
    <div
      className="px-[5%] flex flex-col items-center gap-[64px] mb-[100px] lg:mb-[180px]"
      id="communities"
    >
      <div className="text-center mb-[30px] lg:mb-[64px]">
        <p className="font-semibold text-xl leading-[30px] lg:text-[28px] lg:leading-[60px]  text-[#102327]">
          Our Communities
        </p>
        <p className="text-sm lg:text-[18px] lg:leading-[60px]  text-[#102327]">
          Apply into any of our listed communities
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[20px] lg:gap-y-[40px] gap-x-[20px] lg:gap-x-[40px]">
        {comms.map((comm, index) => (
          <div
            key={index}
            style={{
              border: "0.78px solid #F0F0F0",
              boxShadow:
                "1.57px 1.57px 18.96px 0px #0000000A, -0.78px 0px 20.37px 0px #0000000A ",
            }}
            className="p-[5%] rounded-[15.67px]"
          >
            <img
              src={comm?.image}
              alt={comm.name}
              className="rounded-[7.84px] mb-[25px] lg:mb-[58px] w-full bg-[#E4E4E4] min-h-[201.06px] max-h-[201.06px] lg:min-h-[291.06px] lg:max-h-[291.06px] object-cover"
            />
            <div className="flex flex-col mb-[25px] lg:mb-[58px]">
              <p className="font-semibold lg:text-[22px] lg:leading-[51.72px]">
                {comm.name}
              </p>
              <p className="text-xs lg:text-[14.1px] lg:leading-[21.16px] text-[#8C8C8C]">
                {comm.description}
              </p>
            </div>
            <Button
              className="max-w-fit"
              onClick={() => {
                selectCommunity(comm.name);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Communities;
