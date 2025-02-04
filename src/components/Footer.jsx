import logo from "../assets/logos/footer-logo.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";
import tiktok from "../assets/icons/tiktok.svg";
import linkedin from "../assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <>
      <div className="bg-[#8800FF] px-[5%] pt-[106px] pb-[45px] flex justify-between flex-col flex-wrap md:flex-row gap-x-[50px] gap-y-[50px] text-white">
        <div className="flex flex-col gap-[35px]">
          <div className="flex flex-col gap-5">
            <div
              className="bg-white h-[100px] lg:h-[131px] rounded-[10px] w-fit"
              style={{ boxShadow: "0px 4px 104px 0px #00000040" }}
            >
              <img
                src={logo}
                alt="Bowen Tech Hub"
                className="object-contain size-full"
              />
            </div>
            <p className="max-w-[305px] text-sm lg:text-base lg:leading-[30px]">
              Bowen Tech Hub (BTH) is a vibrant and transformative platform
              designed to empower the next generation of tech leaders.
            </p>
          </div>
          <div className="flex gap-2 lg:gap-4">
            <img src={twitter} />
            <img src={instagram} />
            <img src={tiktok} />
            <img src={linkedin} />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-medium text-xl lg:text-2xl">Communities</p>
          <div className="flex flex-col gap-4 text-sm lg:text-base lg:leading-[30px]">
            <p className="cursor-pointer">Front-End Development</p>
            <p className="cursor-pointer">Back-End Development</p>
            <p className="cursor-pointer">Data Science/AI</p>
            <p className="cursor-pointer">Graphics Design</p>
            <p className="cursor-pointer">Software Engineering</p>
            <p className="cursor-pointer">Cyber Security</p>
            <p className="cursor-pointer">Product Design</p>
            <p className="cursor-pointer">Product Management</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-medium text-xl lg:text-2xl">Information</p>
          <div className="flex flex-col gap-4 text-sm lg:text-base lg:leading-[30px]">
            <p className="cursor-pointer">FAQ</p>
            <p className="cursor-pointer">Resources</p>
            <p className="cursor-pointer">About Us</p>
            <p className="cursor-pointer">Events</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-medium text-xl lg:text-2xl">Privacy Policy</p>
          <div className="flex flex-col gap-4 text-sm lg:text-base lg:leading-[30px]">
            <p className="cursor-pointer">All brands </p>
            <p className="cursor-pointer">Category</p>
            <p className="cursor-pointer">New arrivals</p>
          </div>
        </div>
      </div>
      <div className="px-[5%] py-[15px] lg:py-[25px] bg-[#160D3B] text-center">
        <p className="text-white select-none text-sm lg:text-base">
          2025 © All Rights Reserved. Privacy Policy | Terms of Use
        </p>
      </div>
    </>
  );
};

export default Footer;
