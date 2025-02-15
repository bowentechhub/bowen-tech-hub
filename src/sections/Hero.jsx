import Button from "../components/Button";
import bg from "../assets/bg eclipse.svg";
import img1 from "../assets/images/hero1.png";
import img2 from "../assets/images/hero2.png";
import { useModal } from "../hooks/useModal";

const Hero = () => {
  const { openModal } = useModal();

  return (
    <div
      className="bg-heroGradient bg-[length:300%_100%] animate-smoothGradient"
      id="hero"
    >
      <div
        className="min-h-[100svh] relative overflow-hidden"
        style={{
          backdropFilter: "blur(71.7px)",
          WebkitBackdropFilter: "blur(71.7px)",
          background: "#000000B8",
        }}
      >
        <div className="absolute top-[50%] -translate-y-1/2 left-[6.8vw] flex flex-col gap-[28px] text-white">
          <div className="flex flex-col gap-[18px]">
            <p className="font-medium leading-[24px] text-[10px] md:text-[12px] lg:text-[12px] md:leading-[38px] bg-[#8800FF] px-[15px] md:px-[18px] lg:px-[21.58px] rounded-[7px] md:rounded-[8px] lg:rounded-[9px] max-h-fit max-w-fit">
              Empowering Future Tech Leaders
            </p>
            <div className="flex flex-col gap-[4vw] md:gap-[3vw] lg:gap-[1.5vw] max-w-[95%] md:max-w-[80%] lg:max-w-[600px]">
              {/* Heading */}
              <p className="text-[30px] md:text-[42px] lg:text-[54px] font-semibold leading-[40px] md:leading-[56px] lg:leading-[72.4px] max-w-[300px] md:max-w-[400px] lg:max-w-[442px] -tracking-[1px] md:-tracking-[1.5px] lg:-tracking-[2.16px]">
                Building a strong tech community
              </p>
              <p className="text-[12px] md:text-[14px] lg:text-[15px] leading-[20px] md:leading-[24px] lg:leading-[33px] lg:-tracking-[0.44px]">
                Bowen Tech Hub (BTH) is a vibrant and transformative platform
                designed to empower the next generation of tech leaders.
              </p>
            </div>
          </div>
          <div className="flex gap-3 lg:gap-[28.28px] items-center">
            <Button onClick={openModal} />
            <Button background="#BDBDBD" text="Learn More" />
          </div>
        </div>
        <div className="hidden xl:block absolute top-[50%] -translate-y-1/2 right-[4.5vw] scale-[90%] select-none">
          <div className="relative w-[719px] max-w-[45vw] flex items-center justify-center">
            <p className="absolute top-0 left-[10%] z-30 font-medium leading-[24px] text-[10px] md:text-[12px] lg:text-[12px] md:leading-[38px] bg-[#00000080] text-white px-[15px] md:px-[18px] lg:px-[21.58px] rounded-[7px] md:rounded-[8px] lg:rounded-[9px] max-h-fit max-w-fit">
              Experienced Tutors
            </p>
            <p className="absolute top-[20%] -right-[5%] z-30 font-medium leading-[24px] text-[10px] md:text-[12px] lg:text-[12px] md:leading-[38px] bg-[#00000080] text-white px-[15px] md:px-[18px] lg:px-[21.58px] rounded-[7px] md:rounded-[8px] lg:rounded-[9px] max-h-fit max-w-fit">
              Project Based
            </p>
            <p className="absolute bottom-0 right-[5%] z-30 font-medium leading-[24px] text-[10px] md:text-[12px] lg:text-[12px] md:leading-[38px] bg-[#00000080] text-white px-[15px] md:px-[18px] lg:px-[21.58px] rounded-[7px] md:rounded-[8px] lg:rounded-[9px] max-h-fit max-w-fit">
              Internship Placements
            </p>
            <img src={bg} alt="" className="max-w-[603.45px]" />
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-[85%] w-[90%] border-[17px] rounded-l-full rounded-r-[1000px]  border-[#EDEDED] overflow-hidden">
              <img src={img1} className="size-full object-cover" />
            </div>
            <div className="absolute size-[256.79px] overflow-hidden bottom-0 left-0 translate-y-[30%] rounded-[34.24px] border-[12.48px] border-[#EDEDED]">
              <img src={img2} className="size-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
