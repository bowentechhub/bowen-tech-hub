import ctaBg from "../assets/images/cta-bg.png";
import Button from "../components/Button";
import { useModal } from "../hooks/useModal";

const CTA = () => {
  const { openModal } = useModal();
  return (
    <div className="bg-cta-bg pt-[200px] pb-[150px] bg-cover bg-center px-[5%] my-[100px] lg:my-[180px]">
      <div
        className="p-[5px] rounded-[20px] relative"
        style={{
          background:
            "linear-gradient(256.5deg, #37006D 40.32%, #520099 101.08%)",
        }}
      >
        <img
          src={ctaBg}
          className="absolute inset-0 size-full object-cover rounded-[15px] z-[-1] opacity-[18%]"
          alt="Call to Action Background"
        />

        <div
          className="w-full rounded-[15px] py-[145px] bg-cover bg-center bg-no-repeat flex flex-col gap-[22px] items-center text-white relative z-30"
          style={{
            backgroundImage: `linear-gradient(269.82deg, #1A022F -1.83%, #002B8C 46.14%, #1A022F 104.77%), linear-gradient(180deg, #120120 4.5%, rgba(18, 1, 32, 0) 100%)`,
          }}
        >
          <p className="font-semibold text-lg lg:text-[36px] lg:leading-[66px]">
            Ready to kickstart your journey?
          </p>
          <Button text="Join our Cohort 1.0" onClick={openModal} />
        </div>
      </div>
    </div>
  );
};

export default CTA;
