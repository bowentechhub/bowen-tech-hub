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

const PresidentAndTutors = () => {
  return (
    <div className="bg-[#8C0AFF] py-[89px]">
      <div className="px-[5%] mb-[45px] lg:mb-[92px]">
        <p className="font-semibold text-xl leading-[40px] lg:text-[28px] lg:leading-[60px] text-white">
          Community President & Tutors
        </p>
        <p className="text-sm lg:text-[18px] lg:leading-[27px] text-[#C0C0C0] text-justify">
          Drawing from their extensive industry experience, they will demystify
          complex concepts, provide insights, and offer guidance to nurture your
          skills. Get ready to unlock your full potential as you embark on this
          transformative learning experience.
        </p>
      </div>
      <div className="ml-[5%] flex gap-[18px] lg:gap-[36px] overflow-x-scroll snap-both snap-mandatory pb-[14px] pr-[15px] snap-always">
        {people.map((person, index) => (
          <div
            key={index}
            className="min-w-[300px] min-h-[400px] lg:min-w-[457px] lg:min-h-[537px] bg-white rounded-[10px] z-10 relative snap-center shadow-[14px_12px_#520099]"
          >
            <div className="absolute text-[#102327] bottom-[40px] left-[20px]">
              <p className="font-semibold text-sm lg:text-[18px] lg:leading-[27px]">
                {person.name}
              </p>
              <p className="text-xs lg:text-[14px]">{person.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PresidentAndTutors;
