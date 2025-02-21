import { useState } from "react";
import { motion } from "motion/react";
import { FaPlus } from "react-icons/fa6";

const questions = [
  {
    question: "What is the best way to get started with the app?",
    answer:
      "The best way to get started is to read the documentation. We provide very detailed documentation that will help you get started with the app.",
  },
  {
    question: "How do I get access to the app?",
    answer:
      "You can get access to the app by signing up on our website. You will get an email with instructions on how to get started.",
  },
  {
    question: "Can I use the app on multiple devices?",
    answer:
      "Yes, you can use the app on multiple devices. You just need to sign in with the same account on all your devices.",
  },
  {
    question: "Is the app available on mobile devices?",
    answer:
      "Yes, the app is available on both iOS and Android devices. You can download it from the App Store or Google Play Store.",
  },
];

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      className="my-[100px] lg:my-[180px] flex flex-col gap-[30px] lg:gap-[64px] px-[5%]"
      id="faq"
    >
      <div className="flex flex-col">
        <p className="font-semibold text-sm lg:text-[32px] lg:leading-[66px] text-[#1A022F]">
          Frequency Asked Question
        </p>
        <p className="text-xs lg:text-lg text-[#102327]">
          Some of our frequently asked questions
        </p>
      </div>
      <div className="flex flex-col gap-4 lg:gap-10">
        {questions.map((question, index) => (
          <div
            key={index}
            className={`flex flex-col border rounded-[10px] px-[3%] py-4 lg:py-[26px] cursor-pointer lg:border-[2.5px] ${
              expandedIndex === index
                ? "bg-[#4D1C78] border-[#4D1C78] text-white"
                : "text-[#1F1931] border-[#C6BFD0]"
            }`}
            onClick={() => toggleExpand(index)}
          >
            <div className="flex justify-between items-center">
              <p className="text-sm lg:text-[18px] lg:leading-[27px]">
                {question.question}
              </p>
              <FaPlus
                className={`size-[15px] lg:size-[21px] transition-all duration-300 ${
                  expandedIndex === index ? "transform rotate-45" : ""
                }`}
                color={expandedIndex === index ? "#FFFFFF" : "#520099"}
              />
            </div>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: expandedIndex === index ? "auto" : 0,
                opacity: expandedIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-xs lg:text-[14px] pt-2">{question.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
