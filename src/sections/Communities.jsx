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
        "Explore the world of user interfaces and interactive web experiences. Learn the latest technologies, frameworks, and best practices to build stunning, responsive, and high-performance websites and applications.",
    },
    {
      image: dataScience,
      name: "Data Science/AI",
      description:
        "Dive into the power of data and artificial intelligence. Learn how to analyze, visualize, and interpret data while leveraging AI and machine learning to solve real-world problems.",
    },
    {
      image: bed,
      name: "Back-End Development",
      description:
        "Master the backbone of web applications. Learn server-side programming, databases, and API development to build scalable and secure systems that power modern applications.",
    },
    {
      image: graphics,
      name: "Graphics Design",
      description:
        "Unleash your creativity through visual storytelling. Learn the principles of design, color theory, and digital tools to create stunning graphics, branding, and visual content.",
    },
    {
      image: software,
      name: "Software Engineering",
      description:
        "Gain in-depth knowledge of software development principles, system design, and best coding practices to build robust, scalable, and efficient applications.",
    },
    {
      image: cyb,
      name: "Cyber Security",
      description:
        "Protect digital assets and combat cyber threats. Learn about ethical hacking, network security, risk management, and how to defend systems from cyberattacks.",
    },
    {
      image: product,
      name: "Product Design",
      description:
        "Shape the future of digital products with user-centric design. Learn UI/UX principles, wireframing, prototyping, and how to create seamless user experiences.",
    },
    {
      image: productManagement,
      name: "Project Management",
      description:
        "Lead teams and drive projects to success. Learn agile methodologies, project planning, and effective team collaboration to deliver impactful solutions.",
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
            <div className="rounded-[7.84px] mb-[25px] lg:mb-[58px] w-full bg-[#E4E4E4] min-h-[201.06px] max-h-[201.06px] lg:min-h-[291.06px] lg:max-h-[291.06px] object-cover overflow-hidden">
              <img
                src={comm?.image}
                alt={comm.name}
                className="image-hover-effect"
              />
            </div>
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
