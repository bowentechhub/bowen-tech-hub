import event from "../assets/images/event.jpg";
import Button from "../components/Button";

const SectionSeven = () => {
  return (
    <>
      <div className="px-[5%] flex 0 font-semibold" id="events">
        <p className="bg-[#1A022F] text-white px-4 md:px-[30px] text-md leading-9 lg:text-[22px] lg:leading-[66px] rounded-t-[10px] cursor-pointer">
          Program
        </p>
        <p className="px-4 md:px-[30px] text-md leading-9 lg:text-[22px] lg:leading-[66px] rounded-t-[10px] cursor-not-allowed">
          Webinars
        </p>
        <p className="px-4 md:px-[30px] text-md leading-9 lg:text-[22px] lg:leading-[66px] rounded-t-[10px] cursor-not-allowed">
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
              style={{ border: "8px solid #8800FF" }}
            />
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-xl leading-[30px] lg:text-[28px] lg:leading-[60px]">
                BTH X Frame Africa
              </p>
              <p className="text-sm lg:text-[18px] lg:leading-[27px] text-[#8C8C8C]">
                Frame Africa is a video production company dedicated to
                providing top-quality video services, sharing industry
                knowledge, and building a thriving filmmaking community. Founded
                by passionate filmmakers, it aims to give aspiring creatives
                real-world experience, mentorship, and access to global
                opportunities. Starting at Bowen University, Frame Africa is on
                a mission to empower filmmakers and expand its reach across
                Africa and beyond.
              </p>
              <Button
                text="Enrol today"
                link="https://forms.gle/dga4iaBFyWS6YLmg8"
                className="max-w-fit"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionSeven;
