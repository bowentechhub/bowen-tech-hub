import PropTypes from "prop-types";
import Button from "../components/Button";
import icon from "../assets/icons/download.svg";
import { useCommunity } from "../hooks/useCommunity";

const DownloadCurriculum = ({ setStep }) => {
  const { selectedCommunity } = useCommunity();

  const curriculumFiles = {
    "Front-End Development": null,
    "Data Science/AI": "/curriculums/BTH DATA SCIENCE CURRICULUM UPDATED..docx",
    "Back-End Development":
      "/curriculums/Bowen Tech Hub Backend Development Curriculum.pdf",
    "Graphics Design": null,
    "Software Engineering": null,
    "Cyber Security":
      "/curriculums/Bowen Tech Hub Cybersecurity Curriculum.docx",
    "Product Design":
      "/curriculums/Updated Product Design Teaching Curriculum (1).pdf",
    "Project Management": null,
  };

  const handleDownload = () => {
    const fileUrl = curriculumFiles[selectedCommunity];

    if (fileUrl) {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.setAttribute("download", `${selectedCommunity}_curriculum`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("Curriculum file not found for this community.");
    }

    setStep(3);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6 justify-center items-center">
        <div className="flex flex-col gap-2 justify-center items-center max-w-[463px] text-center">
          <p className="font-semibold text-lg md:text-3xl leading-[1.3]">
            Download your <br /> community Curriculum
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
          <img src={icon} />
          <p className="text-xs md:text-sm">Download Curriculum</p>
        </div>
        <Button text="Download" onClick={handleDownload} />
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

export default DownloadCurriculum;

DownloadCurriculum.propTypes = {
  setStep: PropTypes.func,
};
