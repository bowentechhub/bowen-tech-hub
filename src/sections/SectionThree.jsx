import learn from "../assets/images/learn.jpeg";
import about1 from "../assets/images/about1.jpeg";
import about2 from "../assets/images/about2.jpeg";

const SectionThree = () => {
  return (
    <div className="px-[5%] py-[100px] lg:py-[180px] flex flex-col" id='about'>
      <div className="flex flex-col">
        <p className="font-semibold text-xl lg:text-[28px] leading-[66px]">
          Who We Are
        </p>
        <p className="text-justify lg:text-[18px] lg:leading-[27px] lg:-tracking-[0.36px] text-[#8C8C8C] mb-[30px]">
          Bowen Tech Hub (BTH) is a dynamic tech-based training program
          initiated to empower young and enthusiastic tech talent within the
          university and its surrounding communities. The program offers
          intensive training, mentorship, and opportunities for students to
          excel in diverse tech niches.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-[21px] max-h-min">
        <div className="flex flex-row lg:flex-col lg:gap-2 lg:w-1/2 lg:flex-1">
          <img
            src={about1}
            className="border-[4px] lg:border-[10px] border-white w-1/2 lg:w-full max-h-[477px] object-cover"
            style={{
              boxShadow:
                "2px 2px 24.2px 0px #0000000A, -1px 0px 26px 0px #0000000A",
            }}
          />
          <img
            src={about2}
            className="border-[4px] lg:border-[10px] border-white w-1/2 lg:w-full max-h-[300px] object-cover"
            style={{
              boxShadow:
                "2px 2px 24.2px 0px #0000000A, -1px 0px 26px 0px #0000000A",
            }}
          />
        </div>
        <div className="flex flex-col gap-[43px] lg:gap-[86px] w-full lg:w-1/2 lg:flex-1">
          <div>
            <p className="font-semibold text-lg lg:text-[24px] leading-[66px]">
              Learn
            </p>
            <p className="text-justify lg:text-[18px] lg:leading-[27px] lg:-tracking-[0.36px] text-[#8C8C8C]">
              Drawing from their extensive industry experience, they will
              demystify complex concepts, provide insights, and offer guidance
              to nurture your skills. Get ready to unlock your full potential as
              you embark on this transformative learning experience.
            </p>
          </div>
          <img
            src={learn}
            className="border-[10px] border-white size-full object-cover"
            style={{
              boxShadow:
                "2px 2px 24.2px 0px #0000000A, -1px 0px 26px 0px #0000000A",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
