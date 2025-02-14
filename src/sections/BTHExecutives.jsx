import { useState } from "react";
import Button from "../components/Button";
import presidentImage from "../assets/images/president-Image.jpeg";
import { motion, AnimatePresence } from "motion/react";

const transitionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const people = [
  { name: "Stephan Oshiomogho", title: "President, Product Design Community" },
  { name: "Ojedokun Olaniyi", title: "Product Design Instructor" },
  {
    name: "Iretomiwa Adebiyi Judith",
    title: "President, Project Management Community",
  },
  { name: "Okpala Peniel", title: "Project Management Tutor" },
  { name: "Adekeye Adeola", title: "President, Graphic Design Community" },
  {
    name: "Adedolapo Atiba",
    title: "President, Backend Development Community",
  },
  { name: "Ojekunle Adeola", title: "Backend Development Tutor" },
  { name: "Maxwell Samuel Magaji", title: "Frontend Development Tutor" },
  { name: "Bolaji Daniel", title: "President, Software Development Community" },
  {
    name: "Adebayo Abdul-Salam",
    title: "President, Data Science/AI Community",
  },
  { name: "Samuel Adeniyi", title: "President, Cyber Security Community" },
];

const BTHExecutives = () => {
  const [shown, setShown] = useState("president");

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
              text="President Bio"
              background={shown === "executives" && "#BDBDBD"}
              onClick={() => {
                setShown("president");
              }}
            />
            <Button
              text="View Executives"
              background={shown === "president" && "#BDBDBD"}
              onClick={() => {
                setShown("executives");
              }}
            />
          </div>
        </div>
        <AnimatePresence mode="wait">
          {shown === "president" && (
            <motion.div
              key="president"
              variants={transitionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col md:flex-row md:items-center gap-[50px]"
            >
              {" "}
              <img
                src={presidentImage}
                className="object-cover w-[300px] h-[400px] lg:min-w-[457px] lg:h-[537px] bg-white rounded-[10px] z-10 shadow-[14px_12px_#520099] overflow-hidden"
              />
              <div className="flex flex-col gap-[44px]">
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[#ECECEC] font-medium lg:text-[22px] lg:leading-[33px]">
                    President, Bowen techhub
                  </p>
                  <p className="font-semibold text-lg lg:text-[24px] lg:leading-[36px]">
                    Alagbe Peace is a Product and Brand design, Lagos, Nigeria.
                    He helps brands tell compelling stories via creative
                    designs. Much of him ...
                  </p>
                </div>
                <Button text="Read More" background="#FB00FF" />
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
              {" "}
              {people.map((person, index) => (
                <div
                  key={index}
                  className="relative min-w-[300px] min-h-[400px] lg:min-w-[457px] lg:min-h-[537px] bg-white rounded-[10px] z-10 snap-center shadow-[14px_12px_#520099] overflow-hidden"
                >
                  <img
                    src={presidentImage}
                    className="w-full h-full object-cover"
                    alt={person.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-80 rounded-[10px]" />
                  <div className="absolute bottom-[40px] left-[20px] text-white z-10">
                    <p className="font-semibold text-sm lg:text-[18px] lg:leading-[27px]">
                      {person.name}
                    </p>
                    <p className="text-xs lg:text-[14px]">{person.title}</p>
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
