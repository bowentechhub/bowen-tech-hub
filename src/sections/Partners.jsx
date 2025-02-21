import logo1 from "../assets/logos/logo1.svg";
import logo2 from "../assets/logos/logo2.svg";
import logo3 from "../assets/logos/logo3.png";

const Partners = () => {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo1,
    logo2,
    logo3,
    logo1,
    logo2,
    logo3,
    logo1,
    logo2,
    logo3,
    logo1,
    logo2,
    logo3,
    logo1,
    logo2,
    logo3,
    logo1,
    logo2,
    logo3,
    logo1,
    logo2,
    logo3,
  ];
  return (
    <div className="mt-[23px] lg:mt-[53px] flex flex-col items-center gap-3 lg:gap-6">
      <p className="font-semibold text-xl lg:text-[28px] leading-[66px] text-[#1A022F]">
        Our Partners
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

export default Partners;
