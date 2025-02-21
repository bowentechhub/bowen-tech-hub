const people = [
    {
      "image": "/tutors/stephan.jpg",
      "name": "Stephan Oshiomogho",
      "title": "President, Product Design Community"
    },
    {
      "image": "/tutors/judith.PNG",
      "name": "Iretomiwa Adebiyi Judith",
      "title": "President, Project Management Community"
    },
    {
      "image": "/tutors/adekeye.JPG",
      "name": "Adekeye Adeola",
      "title": "President, Graphic Design Community"
    },
    {
      "image": "/tutors/adedolapo.jpeg",
      "name": "Adedolapo Atiba",
      "title": "President, Backend Development Community"
    },
    {
      "image": "/tutors/bolaji.jpg",
      "name": "Bolaji Daniel",
      "title": "President, Software Development Community"
    },
    {
      "image": "/tutors/adebayo.jpg",
      "name": "Adebayo Abdul-Salam",
      "title": "President, Data Science/AI Community"
    },
    {
      "image": "/tutors/samuel.jpg",
      "name": "Samuel Adeniyi",
      "title": "President, Cyber Security Community"
    },
    {
      "image": "/tutors/olaniyi.jpg",
      "name": "Ojedokun Olaniyi",
      "title": "Product Design Instructor"
    },
    {
      "image": "/tutors/peniel.jpg",
      "name": "Okpala Peniel",
      "title": "Project Management Tutor"
    },
    {
      "image": "/tutors/adeola.HEIC",
      "name": "Ojekunle Adeola",
      "title": "Backend Development Tutor"
    },
    {
      "image": "/tutors/maxwell.jpg",
      "name": "Maxwell Samuel Magaji",
      "title": "Frontend Development Tutor"
    }
  ]

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
            className="min-w-[300px] min-h-[400px] lg:min-w-[457px] lg:min-h-[537px] max-w-[300px] max-h-[400px] lg:max-w-[457px] lg:max-h-[537px] bg-white rounded-[10px] z-10 relative snap-center shadow-[14px_12px_#520099] overflow-hidden"
          >
            <img
              src={person?.image}
              className="w-full h-full object-cover"
              alt={person.name}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-80 rounded-[10px]" />
            <div className="absolute text-[white] bottom-[40px] left-[20px]">
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
