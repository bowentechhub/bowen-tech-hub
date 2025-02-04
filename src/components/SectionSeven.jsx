import event from "../assets/images/event.jpeg";
import Button from "../components/Button";

const SectionSeven = () => {
  return (
    <>
      <div className="px-[5%] flex 0 font-semibold">
        <p className="bg-[#1A022F] text-white px-4 md:px-[30px] text-md leading-9 lg:text-[22px] lg:leading-[66px] rounded-t-[10px] cursor-pointer">
          Program
        </p>
        <p className="px-4 md:px-[30px] text-md leading-9 lg:text-[22px] lg:leading-[66px] rounded-t-[10px] cursor-pointer">
          Webinars
        </p>
        <p className="px-4 md:px-[30px] text-md leading-9 lg:text-[22px] lg:leading-[66px] rounded-t-[10px] cursor-pointer">
          Events
        </p>
      </div>
      <div className="bg-[#1A022F] px-[5%] pt-[40px] lg:pt-[62px] pb-[60px] lg:pb-[180px] text-white">
        <div className="flex flex-col gap-[40px] lg:gap-[80px]">
          <p className="font-semibold text-xl leading-[30px] lg:text-[28px] lg:leading-[60px]">
            Our Partners Event
          </p>
          <div className="flex flex-col md:flex-row md:items-center gap-[34px] lg:gap-[68px]">
            <img
              src={event}
              className="lg:max-h-[525.97px] object-contain md:max-w-[50%]"
              style={{ border: "8px solid #177751" }}
            />
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-xl leading-[30px] lg:text-[28px] lg:leading-[60px]">
                BTH X Innovfrica
              </p>
              <p className="text-sm lg:text-[18px] lg:leading-[27px] text-[#8C8C8C]">
                Drawing from their extensive industry experience, they will
                demystify complex concepts, provide insights, and offer guidance
                to nurture your skills. Get ready to unlock your full potential
                as you embark on this transformative learning experience.
              </p>
              <Button text="Enrol today" className="max-w-fit" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionSeven;
