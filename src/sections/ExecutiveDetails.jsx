import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";
import tiktok from "../assets/icons/tiktok.svg";
import linkedin from "../assets/icons/linkedin.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
// import Button from "../components/Button";
import { executives } from "../helper/executives";
import { FaArrowLeft } from "react-icons/fa6";
import { useEffect, useState } from "react";

const ExecutiveDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const executive = executives.find(
    (exec) => exec.name === decodeURIComponent(name)
  );
  const [vh, setVh] = useState(window.innerHeight);

  useEffect(() => {
    const updateHeight = () => {
      setVh(window.innerHeight);
    };

    window.addEventListener("resize", updateHeight);
    updateHeight();

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const half = Math.ceil(executives.length / 2);
  const firstHalf = executives.slice(0, half);
  const secondHalf = executives.slice(half);

  if (!executive) {
    return <div className="text-center text-red-500">Executive not found!</div>;
  }

  return (
    <div
      className="w-screen bg-no-repeat bg-center bg-cover bg-fixed text-white relative px-[5%]"
      style={{
        minHeight: `${vh}px`,
        height: `${vh}px`,
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 24.93%, rgba(0, 0, 0, 0.8) 100%), url(${executive.image})`,
      }}
    >
      {/* mobile */}
      <div
        className="lg:hidden flex flex-col justify-between py-[17px]"
        style={{ height: `${vh}px` }}
      >
        {executive.paragraph2 && (
          <p className="text-[#FFFFFF] -tracking-[1.44px] text-justify ">
            {executive?.paragraph2.split(".")[0]}.
          </p>
        )}
        <div className="flex flex-col gap-5 mt-auto">
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-1">
              <p className="font-semibold text-[26px] leading-[35px] text-justify -tracking-[1.92px] max-w-[200px]">
                {executive.name}
              </p>
              <Link
                to="/"
                className="py-[7.14px] px-[14px] bg-[#8C0AFF] border-[0.71px] border-white flex items-center gap-[7.85px] rounded-[25.69px] text-sm -tracking-[1.26px] whitespace-nowrap select-none"
              >
                <FaArrowLeft color="white" />
                <p>Back to home</p>
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-sm -tracking-[1.26px] text-justify">
                {executive.paragraph1}
              </p>
              <div className="flex items-center justify-between gap-[10px]">
                <div className="flex gap-1">
                  <img src={twitter} />
                  <img src={instagram} />
                  <img src={tiktok} />
                  <img src={linkedin} />
                </div>
                <p className="font-semibold text-[24px] leading-[24px] text-right -tracking-[2.4px] max-w-[190px]">
                  {executive.title}
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-[15px] overflow-scroll">
            {executives.map((item, index) => (
              <div
                className={`w-[50px] h-[65px] rounded-[41.81px] overflow-hidden flex-shrink-0 relative cursor-pointer ${
                  item.name === executive.name
                    ? "border-[1.38px] border-[#8800FF]"
                    : ""
                }`}
                key={index}
                onClick={() =>
                  navigate(`/executives/${encodeURIComponent(item.name)}`)
                }
              >
                <div
                  className="absolute size-full z-[40] inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0) 24.93%, rgba(0, 0, 0, 0.8) 100%)",
                  }}
                />
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* larger screens */}
      <div className="pt-[70px] hidden lg:flex justify-between gap-[90px] relative">
        <div className="absolute top-[32px]">
          <Link
            to="/"
            className="py-[7.14px] px-[14px] bg-inherit border-[0.71px] border-white flex items-center gap-[7.85px] rounded-[25.69px] text-sm -tracking-[1.26px] whitespace-nowrap select-none"
          >
            <FaArrowLeft color="white" />
            <p>Back to home</p>
          </Link>
        </div>
        <div className="flex flex-col gap-7">
          <p className="max-w-[432px] font-semibold text-[70px] -tracking-[4.2px] leading-[70px]">
            {executive.name}
          </p>
          <div className="flex gap-[15px]">
            <img src={twitter} />
            <img src={instagram} />
            <img src={tiktok} />
            <img src={linkedin} />
          </div>
          <p className="max-w-[384px] text-2xl text-justify -tracking-[1.92px] leading-[36px]">
            {executive.paragraph2}
          </p>
        </div>
        <div className="flex flex-col gap-[29px] max-w-[504px] items-end">
          <p className="text-2xl text-justify -tracking-[1.92px] leading-[36px]">
            {executive.paragraph1}
          </p>
          <p className="font-semibold text-[38.68px] -tracking-[3.86px] text-right">
            {executive.title}
          </p>
        </div>
      </div>

      <div className="hidden absolute bottom-[40px] w-[90%] right-[50%] translate-x-[50%] lg:flex gap-[27px] justify-between overflow-scroll">
        {/* First half */}
        <div className="flex gap-[27px]">
          {firstHalf.map((item, index) => (
            <div
              className={`w-[72.35315704345703px] h-[95px] rounded-[60px] overflow-hidden flex-shrink-0 cursor-pointer relative ${
                item.name === executive.name
                  ? "border-[2px] border-[#8800FF]"
                  : ""
              }`}
              key={index}
              onClick={() =>
                navigate(`/executives/${encodeURIComponent(item.name)}`)
              }
            >
              <div
                className="absolute size-full z-[40] inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0) 24.93%, rgba(0, 0, 0, 0.8) 100%)",
                }}
              />
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Second half */}
        <div className="flex gap-[27px]">
          {secondHalf.map((item, index) => (
            <div
              className={`w-[72.35315704345703px] h-[95px] rounded-[60px] overflow-hidden flex-shrink-0 cursor-pointer relative ${
                item.name === executive.name
                  ? "border-[2px] border-[#8800FF]"
                  : ""
              }`}
              key={index + half}
              onClick={() =>
                navigate(`/executives/${encodeURIComponent(item.name)}`)
              }
            >
              <div
                className="absolute size-full z-[40] inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0) 24.93%, rgba(0, 0, 0, 0.8) 100%)",
                }}
              />
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExecutiveDetails;
