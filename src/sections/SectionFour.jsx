import { RiShieldUserLine } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { MdPersonPinCircle } from "react-icons/md";

const SectionFour = () => {
  return (
    <div className="px-[5%] text-white pb-[100px] lg:pb-[180px]">
      <div className="text-black mb-[20px] lg:mb-[45px] mx-auto text-center lg:mx-0 lg:text-left">
        <p className="text-sm lg:text-lg">Talk impact, Talk BTH</p>
        <p className="capitalize text-[#1A022F] font-semibold text-xl lg:text-[28px] lg:leading-[66px]">
          Our track record
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-[32px] w-full">
        <div className="flex flex-col gap-[33px] w-full">
          <div className="h-[400px] lg:h-[600px] border rounded-3xl w-full p-[5%] flex flex-col justify-between bg-custom1 bg-[length:300%_100%] animate-smoothGradient">
            <RiShieldUserLine className="text-[40px] lg:text-[60px]" />
            <div className="flex flex-col justify-between gap-[15px] md:gap-[30px]">
              <div className="flex flex-col">
                <p className="font-semibold text-3xl lg:text-[43.66px] lg:leading-[65.79px]">
                  800+
                </p>
                <p className="lg:text-[22.74px] lg:leading-[34.11px] text-[#D9D9D9]">
                  Trained <br />
                  Students
                </p>
              </div>
              <p className="lg:text-[18.74px] lg:leading-[34.11px] text-[#D9D9D9]">
                Within the last 4 years
              </p>
            </div>
          </div>
          <div className="h-[200px] lg:h-[300px] border rounded-3xl w-full p-[5%] flex flex-col justify-between bg-custom2 bg-[length:300%_100%] animate-smoothGradient">
            <div className="flex justify-between">
              <div>
                <p className="font-semibold text-3xl lg:text-[43.66px] lg:leading-[65.79px]">
                  30+
                </p>
                <p className="lg:text-[22.74px] lg:leading-[34.11px] text-[#D9D9D9]">
                  Alumni Students
                </p>
              </div>
              {/* <RiShieldUserLine className="text-[40px] lg:text-[60px]" /> */}
            </div>
            <p className="lg:text-[18.74px] lg:leading-[34.11px] text-[#D9D9D9]">
              Work with top tier companies
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[33px] md:flex-col-reverse w-full">
          <div className="h-[400px] lg:h-[600px] border rounded-3xl w-full p-[5%] flex flex-col justify-between  bg-custom3 bg-[length:300%_100%] animate-smoothGradient">
            <MdPersonPinCircle className="text-[40px] lg:text-[60px]" />
            <div className="flex flex-col justify-between gap-[15px] md:gap-[30px]">
              <div className="flex flex-col">
                <p className="font-semibold text-3xl lg:text-[43.66px] lg:leading-[65.79px]">
                  30+
                </p>
                <p className="lg:text-[22.74px] lg:leading-[34.11px] text-[#D9D9D9]">
                  Internship <br />
                  Placements
                </p>
              </div>
              <p className="lg:text-[18.74px] lg:leading-[34.11px] text-[#D9D9D9]">
                In reputable companies
              </p>
            </div>
          </div>
          <div className="h-[200px] lg:h-[300px] border rounded-3xl w-full p-[5%] flex flex-col justify-between bg-custom4 bg-[length:300%_100%] animate-smoothGradient">
            <div className="flex justify-between">
              <div>
                <p className="font-semibold text-3xl lg:text-[43.66px] lg:leading-[65.79px]">
                  8
                </p>
                <p className="lg:text-[22.74px] lg:leading-[34.11px] text-[#D9D9D9]">
                  Communities
                </p>
              </div>
              <IoIosPeople className="text-[40px] lg:text-[60px]" />
            </div>
            <p className="lg:text-[18.74px] lg:leading-[34.11px] text-[#D9D9D9]">
              Lead by certified <br /> instructors
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
