const WhyBTH = () => {
  const reasons = [
    {
      heading: "Tailored Learning Paths",
      description:
        "Unlike one-size-fits-all approaches offered by many platforms, BTH designs personalized learning paths aligned with your career goals. With mentorship programs, flexible schedules, and resources tailored to individual skill levels, BTH ensures every member thrives.",
    },
    {
      heading: "Hands-On Projects ",
      description:
        "At BTH, learning transcends theory. Members work on real-world projects, hackathons, and pitch competitions that not only enhance skills but also build portfolios that stand out to employers. This practical exposure is unmatched by competitors like Google or Altschool.",
    },
    {
      heading: "Access to Premium Tech Education ",
      description:
        "While other platforms charge exorbitant fees, BTH offers cost-effective programs without compromising on quality. This democratizes access to cutting-edge tech education, enabling more individuals to benefit from expert training.",
    },
    {
      heading: "Community-Driven Networking ",
      description:
        "BTH fosters a vibrant community where members connect, collaborate, and grow together. Regular meetups, events, and collaborative projects make networking seamless, opening doors to job opportunities, partnerships, and lifelong professional relationships.",
    },
    {
      heading: "Dedicated Mentorship from Industry ",
      description:
        "With mentors who are leaders in their respective fields, BTH provides unparalleled guidance. Whether it’s career advice, technical expertise, or personal development, learners receive dedicated support that helps them excel in their tech journey.",
    },
    {
      heading: "Innovation-Focused Ecosystem ",
      description:
        "BTH cultivates an environment that encourages experimentation, creativity, and entrepreneurial spirit. With a focus on innovation and problem-solving, members emerge not just as tech professionals but as forward-thinking leaders poised to revolutionize industries.",
    },
  ];

  const scroll = [
    "Expert Mentorship",
    "Tailored Learning Paths",
    "Hands-On Projects",
    "Affordable Tech Education",
    "Community Networking",
    "Expert Mentorship",
    "Tailored Learning Paths",
    "Hands-On Projects",
    "Affordable Tech Education",
    "Community Networking",
  ];
  return (
    <div className="bg-[#1A022F] py-[50px] text-[#FFFFFF] mb-[100px] lg:mb-[180px]">
      <div className="px-[5%]">
        <p className="font-semibold text-xl leading-[30px] lg:text-[28px] lg:leading-[66px] mb-[20px] lg:mb-[80px]">
          Why you should Join the BTH Community
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[20px] lg:gap-y-[40px] gap-x-[20px] lg:gap-x-[50px] mb-[20px] lg:mb-[80px]">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col lg:gap-4">
              <p className="font-semibold text-lg lg:text-[24px] leading-[66px]">
                {reason.heading}
              </p>
              <p className="text-justify lg:text-[18px] lg:leading-[27px] lg:-tracking-[0.36px] text-[#8C8C8C]">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-screen overflow-hidden flex whitespace-nowrap">
        <div className="flex items-center animate-scroll min-w-max">
          {scroll.map((item, index) => (
            <p
              key={index}
              className="font-bold lg:text-[20px] lg:leading-[36px] p-[10px] mx-[21px] lg:py-[18px] lg:px-[28px] border bg-[#3232494D] text-[#F4F4F4] rounded-[16px]"
              style={{
                border: "0.79px solid",
                // boxShadow: "2px 2px 6.6px 0px #585AA880",
                // backdropFilter: "blur(25.799999237060547px)",
              }}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyBTH;
