import { useState } from "react";
import Button from "../components/Button";
import { motion, AnimatePresence } from "motion/react";

const transitionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const executives = [
  {
    name: "Alagbe Peace",
    title: "President, BTH",
    image: "/executives/peace.jpeg",
  },
  {
    name: "Daniella Afegbai",
    title: "Vice-President, BTH",
    image: "/executives/daniella.jpeg",
  },
  {
    name: "Odetokun Treasure Oluwatobi",
    title: "General Secretary, BTH",
    image: "/executives/treasure.jpg",
  },
  {
    name: "Kadri Joy Oluwaseyifunmi",
    title: "Financial Secretary, BTH",
    image: "/executives/joy.jpg",
  },
  {
    name: "Michael Eriayooluwa Helmer",
    title: "Community Lead, BTH",
    image: "/executives/michael.jpg",
  },
  {
    name: "Eniola Falade Sharon",
    title: "Head of Partnerships and Sponsorship, BTH",
    image: "/executives/eniola.jpg",
  },
  {
    name: "Oluwatimilehin Akinnirun",
    title: "Co-Head Sponsorship and Partnership, BTH",
    image: "/executives/timilehin.jpg",
  },
  {
    name: "Adeboye Blessing",
    title: "Designer Lead, BTH",
    image: "/executives/blessing.JPG",
  },
  {
    name: "Immanuel Antonza",
    title: "Videography Lead, BTH",
    image: "/executives/immanuel.jpg",
  },
  {
    name: "Ene-Edah Oghenemine",
    title: "Content Lead, BTH",
    image: "/executives/ene-edah.JPG",
  },
  {
    name: "Alabi Boluwatife",
    title: "Content Writer, BTH",
    image: "/executives/boluwatife.jpg",
  },
  {
    name: "Odewumi Oluwabukunmi",
    title: "Volunteer Lead, BTH",
    image: "/executives/bukunmi.jpg",
  },
];

const BTHExecutives = () => {
  const [shown, setShown] = useState("executives");
  const [selectedExecutive, setSelectedExecutive] = useState(null);

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
                    {selectedExecutive?.title}
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
              {executives.map((person, index) => (
                <div
                  key={index}
                  className="relative min-w-[300px] min-h-[400px] lg:min-w-[457px] lg:min-h-[537px] max-w-[300px] max-h-[400px] lg:max-w-[457px] lg:max-h-[537px] bg-white rounded-[10px] z-10 snap-center shadow-[14px_12px_#520099] overflow-hidden cursor-pointer"
                  onClick={() => {
                    setSelectedExecutive(person);
                    setShown("executiveDetails");
                  }}
                >
                  <img
                    src={person?.image}
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
