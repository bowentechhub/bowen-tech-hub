import person from "../assets/images/person.jpeg";

const testimonials = [
  {
    image: person,
    name: "ABIOLA AYODELE",
    role: "CEO, BTH",
    text: "Drawing from their extensive industry experience, they will demystify complex concepts, provide insights, and offer guidance to nurture your skills. Get ready to unlock your full potential as you embark on this transformative learning experience.",
  },
  {
    image: person,
    name: "ABIOLA AYODELE",
    role: "CEO, BTH",
    text: "Drawing from their extensive industry experience, they will demystify complex concepts, provide insights, and offer guidance to nurture your skills. Get ready to unlock your full potential as you embark on this transformative learning experience.",
  },
  {
    image: person,
    name: "ABIOLA AYODELE",
    role: "CEO, BTH",
    text: "Drawing from their extensive industry experience, they will demystify complex concepts, provide insights, and offer guidance to nurture your skills. Get ready to unlock your full potential as you embark on this transformative learning experience.",
  },
  {
    image: person,
    name: "ABIOLA AYODELE",
    role: "CEO, BTH",
    text: "Drawing from their extensive industry experience, they will demystify complex concepts, provide insights, and offer guidance to nurture your skills. Get ready to unlock your full potential as you embark on this transformative learning experience.",
  },
  {
    image: person,
    name: "ABIOLA AYODELE",
    role: "CEO, BTH",
    text: "Drawing from their extensive industry experience, they will demystify complex concepts, provide insights, and offer guidance to nurture your skills. Get ready to unlock your full potential as you embark on this transformative learning experience.",
  },
];
const Evidence = () => {
  return (
    <div className="mt-[23px] mb-[100px] lg:mt-[53px] lg:mb-[180px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 lg:gap-y-[147px] items-center px-[5%]">
      <div className="w-full font-semibold text-xl leading-[66px] lg:text-[24px] text-[#1A022F]">
        Evidence: see for yourself
      </div>
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="rounded-[9.32px] relative overflow-hidden bg-[#8300F6] h-[239.53px] flex items-center justify-center px-[10%]"
          style={{
            boxShadow:
              " 2px 2px 24.2px 0px #0000000A, -1px 0px 26px 0px #0000000A",
          }}
        >
        <p className="text-white text-[12.05px] leading-[18.08px] text-justify">{testimonial.text}</p>
          <div className="absolute bottom-0 left-0 bg-white rounded-tr-[9.32px] flex items-center gap-[6.46px] h-[60px] w-[191.63px] justify-center">
            <img
              src={testimonial.image}
              className="size-[51.54px] rounded-full object-cover border-[0.65px] border-[#8300F6]"
            />
            <div className="flex flex-col">
              <p className="font-semibold text-[10.77px] leading-[16px]">{testimonial.name}</p>
              <p className="text-[#484646] text-[7.75px] leading-[16.15px]">{testimonial.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Evidence;
