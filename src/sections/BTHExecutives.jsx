import { useState } from "react";
import Button from "../components/Button";
import { motion, AnimatePresence } from "motion/react";
import { executives } from "../helper/executives";
import { useNavigate } from "react-router-dom";

const transitionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const BTHExecutives = () => {
  const [shown, setShown] = useState("executives");
  const [selectedExecutive, setSelectedExecutive] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="py-[50px] lg:py-[100px] px-[5%] bg-[#8800FF] text-white">
      <div className="flex flex-col gap-10 lg:gap-[80px]">
        <div className="flex justify-between flex-wrap gap-3">
          <div className="flex flex-col">
            <p className="font-semibold text-sm lg:text-[32px] lg:leading-[66px]">
              BOWEN TECH HUB EXECUTIVES
            </p>
            <p className="text-xs lg:text-lg">Meet the 2025 Bth Executives</p>
          </div>
          <div className="rounded-[16px] p-2 lg:py-5 lg:px-[22px] bg-white flex gap-[14px] items-center ml-auto">
            <Button
              text="View Executives"
              onClick={() => {
                setShown("executives");
              }}
            />
          </div>
        </div>
        <AnimatePresence mode="wait">
          {shown === "executiveDetails" && (
            <motion.div
              key="executiveDetails"
              variants={transitionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col md:flex-row md:items-center gap-[50px]"
            >
              <img
                src={selectedExecutive?.image}
                alt={selectedExecutive?.name}
                className="object-cover min-w-[300px] h-[400px] lg:min-w-[457px] lg:h-[537px] bg-white rounded-[10px] z-10 shadow-[14px_12px_#520099] overflow-hidden"
              />
              <div className="flex flex-col gap-[44px]">
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[#ECECEC] font-medium lg:text-[22px] lg:leading-[33px]">
                    {selectedExecutive?.title}, Bowen Tech Hub
                  </p>
                  {selectedExecutive.paragraph1 && (
                    <p className="font-semibold text-lg lg:text-[24px] lg:leading-[36px]">
                      {selectedExecutive?.paragraph1
                        .split(" ")
                        .slice(0, 20)
                        .join(" ")}
                      {selectedExecutive?.paragraph1.split(" ").length > 20
                        ? "..."
                        : ""}
                    </p>
                  )}
                </div>
                {selectedExecutive.paragraph1 && (
                  <Button
                    text="Read More"
                    background="#FB00FF"
                    onClick={() =>
                      navigate(
                        `/executives/${encodeURIComponent(
                          selectedExecutive.name
                        )}`
                      )
                    }
                  />
                )}
              </div>
            </motion.div>
          )}
          {shown === "executives" && (
            <motion.div
              key="executives"
              variants={transitionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex gap-[18px] lg:gap-[36px] overflow-x-scroll snap-both snap-mandatory pb-[14px] pr-[15px] snap-always"
            >
              {executives.map((person, index) => (
                <div
                  key={index}
                  className="relative min-w-[300px] min-h-[400px] lg:min-w-[457px] lg:min-h-[537px] max-w-[300px] max-h-[400px] lg:max-w-[457px] lg:max-h-[537px] bg-white rounded-[10px] z-10 snap-center shadow-[14px_12px_#520099] overflow-hidden cursor-pointer group"
                  onClick={() => {
                    setSelectedExecutive(person);
                    setShown("executiveDetails");
                  }}
                >
                  <img
                    src={person?.image}
                    className="size-full object-cover transition-all duration-500 group-hover:scale-[1.1]"
                    alt={person.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-80 rounded-[10px]" />
                  <div className="absolute bottom-[40px] left-[20px] text-white z-10">
                    <p className="font-semibold text-sm lg:text-[18px] lg:leading-[27px]">
                      {person.name}
                    </p>
                    <p className="text-xs lg:text-[14px]">
                      {person.title}, BTH
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BTHExecutives;
