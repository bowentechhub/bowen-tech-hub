import JoinCommunity from "./JoinCommunity";
import { useModal } from "../hooks/useModal";
import { useEffect, useState } from "react";
import DownloadCurriculum from "./DownloadCurriculum";
import JoinCommunityGroup from "./JoinCommunityGroup";

const Modal = () => {
  const { isOpen, closeModal } = useModal();
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    setStep(1);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed h-[100dvh] w-screen bg-black z-[500] bg-opacity-25 flex items-center justify-center"
      style={{
        backdropFilter: "blur(10px)",
      }}
      onClick={closeModal}
    >
      <div
        className="w-[90%] max-w-[500px] overflow-auto rounded-[20px] flex items-center justify-center px-[5%] py-[10%] md:px-[2%] md:py-[5%] text-white bg-modalGradient bg-[length:300%_100%] animate-smoothGradient"
        onClick={(e) => e.stopPropagation()}
      >
        {step === 1 && <JoinCommunity setStep={setStep} />}
        {step === 2 && <DownloadCurriculum setStep={setStep} />}
        {step === 3 && <JoinCommunityGroup setStep={setStep} />}
      </div>
    </div>
  );
};

export default Modal;
