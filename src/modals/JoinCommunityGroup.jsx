import PropTypes from "prop-types";
import Button from "../components/Button";
import logo from "../assets/logos/join-logo.svg";
import whatsapp from "../assets/logos/whatsapp.svg";
import { useCommunity } from "../hooks/useCommunity";
import { useModal } from "../hooks/useModal";

const JoinCommunityGroup = () => {
  const { selectedCommunity } = useCommunity();
  const { closeModal } = useModal();

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6 justify-center items-center">
        <div className="flex flex-col gap-2 justify-center items-center max-w-[463px] text-center">
          <img src={whatsapp} className="size-[120px]" />
          <p className="font-semibold text-lg md:text-3xl leading-[1.3]">
            Join our community and <br />
            get early access
          </p>
          <p className="text-xs md:text-sm leading-[1.5] md:max-w-[80%]">
            Welcome to the {selectedCommunity} community.
          </p>
        </div>
        <div
          className="w-full"
          style={{
            border: "1px solid",
            borderImageSource:
              "linear-gradient(90deg, #150835 9.5%, #FFFFFF 49%, #150835 86.5%)",
            borderImageSlice: 1,
          }}
        />
      </div>
      <div
        className="py-[6px] px-[12px] md:py-[12px] md:px-[18.5px] bg-[#120F48] flex w-full items-center justify-between rounded-[10px] mb-5"
        style={{
          border: "1.79px solid",
          borderImageSource:
            "linear-gradient(90deg, #002B8C 0%, #185DE7 44%, #002B8C 100%)",
          borderImageSlice: 1,
        }}
      >
        <div className="flex items-center gap-[9px]">
          <div
            className="size-[31.15px] rounded-full border-[0.81px] border-white flex items-center justify-center"
            style={{
              background: "#AF0D35",
            }}
          >
            <img src={logo} />
          </div>
          <p className="text-xs md:text-sm">{selectedCommunity}</p>
        </div>
        <Button
          text="Join"
          background="linear-gradient(90deg, #27A737 0%, #226028 49.5%, #27A737 100%)"
          onClick={closeModal}
        />
      </div>
      <div
        className="w-full"
        style={{
          border: "1px solid",
          borderImageSource:
            "linear-gradient(90deg, #150835 9.5%, #FFFFFF 49%, #150835 86.5%)",
          borderImageSlice: 1,
        }}
      />
    </div>
  );
};

export default JoinCommunityGroup;

JoinCommunityGroup.propTypes = {
  setStep: PropTypes.func,
};
