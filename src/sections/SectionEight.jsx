import klasha from "../assets/logos/klasha.svg";
import mtn from "../assets/logos/mtn.svg";
import brdge from "../assets/logos/brdge.svg";
import ta from "../assets/logos/ta.svg";
import stranerd from "../assets/logos/stranerd.svg";

const SectionEight = () => {
  const logos = [
    klasha,
    mtn,
    brdge,
    ta,
    stranerd,
    klasha,
    mtn,
    brdge,
    ta,
    stranerd,
    klasha,
    mtn,
    brdge,
    ta,
    stranerd,
    klasha,
    mtn,
    brdge,
    ta,
    stranerd,
  ];
  return (
    <div className="mt-[23px] mb-[100px] lg:mt-[53px] lg:mb-[180px] flex flex-col items-center gap-3 lg:gap-6">
      <p className="font-semibold text-xl lg:text-[28px] leading-[66px] text-[#1A022F]">
        Where Our Learners Work
      </p>
      <div className="w-screen overflow-hidden flex whitespace-nowrap">
        <div className="flex items-center animate-scroll min-w-max">
          {logos.map((logo, index) => (
            <img
              src={logo}
              key={index}
              className="max-h-[50px] lg:max-h-[65px] mx-[15px] lg:mx-[20px]"
              alt={`logo-${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionEight;
