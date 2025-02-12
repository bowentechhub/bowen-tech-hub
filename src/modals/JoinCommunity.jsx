import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCommunity } from "../hooks/useCommunity";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  fullName: yup
    .string()
    .min(3, "Full name must be at least 3 characters")
    .required("Full name is required"),
  community: yup.string().required("Please select a community"),
  expertiseLevel: yup.string().when("community", {
    is: (val) => val && val !== "",
    then: (schema) => schema.required("Please select an expertise level"),
  }),
});

const JoinCommunity = ({ setStep }) => {
  const { communityOptions, selectedCommunity, setSelectedCommunity } =
    useCommunity();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      community: selectedCommunity || "",
      expertiseLevel: "",
    },
  });

  const communityValue = watch("community");

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    setSelectedCommunity(data.community);
    setStep(2);
  };

  return (
    <div className="w-full flex flex-col gap-10">
      {/* Header Section */}
      <div className="flex flex-col gap-6 justify-center items-center">
        <div className="flex flex-col gap-2 justify-center items-center max-w-[463px] text-center">
          <p className="font-semibold text-lg md:text-3xl leading-[1.3]">
            Join our community and <br /> get early access
          </p>
          <p className="text-xs md:text-sm leading-[1.5] md:max-w-[80%]">
            Join our exclusive community of founders, innovators, and venture
            capitalists.
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

      {/* Form Section */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 md:gap-8 w-[90%] md:w-[80%] mx-auto"
      >
        <div className="flex flex-col gap-2 md:gap-6">
          {/* Email Input */}
          <div>
            <div
              className="md:h-12 w-full rounded-lg p-[2px] flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(90deg, #002B8C 0%, #185DE7 44%, #002B8C 100%)",
              }}
            >
              <div className="w-full h-full bg-[#120F48] rounded-lg flex items-center p-4">
                <input
                  style={{
                    WebkitBoxShadow: "0 0 0px 1000px #120F48 inset",
                    WebkitTextFillColor: "white",
                  }}
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                  className="bg-transparent w-full outline-none text-sm md:text-base border-none text-[#F0F0F0] placeholder-[#A0A0A0]"
                />
              </div>
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>

          {/* Full Name Input */}
          <div>
            <div
              className="md:h-12 w-full rounded-lg p-[2px] flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(90deg, #002B8C 0%, #185DE7 44%, #002B8C 100%)",
              }}
            >
              <div className="w-full h-full bg-[#120F48] rounded-lg flex items-center p-4">
                <input
                  style={{
                    WebkitBoxShadow: "0 0 0px 1000px #120F48 inset",
                    WebkitTextFillColor: "white",
                  }}
                  type="text"
                  placeholder="Full Name"
                  {...register("fullName")}
                  className="bg-transparent w-full outline-none text-sm md:text-base border-none text-[#F0F0F0] placeholder-[#A0A0A0]"
                />
              </div>
            </div>
            {errors.fullName && (
              <p className="text-red-500 text-xs">{errors.fullName.message}</p>
            )}
          </div>

          {/* Community Select */}
          <div>
            <div
              className="md:h-12 w-full rounded-lg p-[2px] flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(90deg, #002B8C 0%, #185DE7 44%, #002B8C 100%)",
              }}
            >
              <div className="w-full h-full bg-[#120F48] rounded-lg flex items-center p-4">
                <select
                  {...register("community")}
                  className="bg-transparent w-full outline-none text-sm md:text-base border-none text-[#F0F0F0] placeholder-[#A0A0A0]"
                >
                  <option value="">Select a track</option>
                  {communityOptions.map((option, index) => (
                    <option className="text-black" value={option} key={index}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {errors.community && (
              <p className="text-red-500 text-xs">{errors.community.message}</p>
            )}
          </div>
        </div>
        {communityValue && (
          <div>
            <p className="text-sm md:text-base mb-2">
              Select your expertise level:
            </p>
            <div className="flex items-center gap-3">
              <label>
                <input
                  type="radio"
                  value="beginner"
                  {...register("expertiseLevel")}
                />{" "}
                Beginner
              </label>
              <label>
                <input
                  type="radio"
                  value="professional"
                  {...register("expertiseLevel")}
                />{" "}
                Professional
              </label>
            </div>
            {errors.expertiseLevel && (
              <p className="text-red-500 text-xs">
                {errors.expertiseLevel.message}
              </p>
            )}
          </div>
        )}
        {/* Submit Button */}
        <button
          type="submit"
          className="flex items-center justify-center w-full py-4 md:h-12 select-none cursor-pointer rounded-lg text-sm md:text-base"
          style={{
            background:
              "linear-gradient(90deg, #520099 0%, #8800FF 49.5%, #520099 100%)",
          }}
        >
          Join our community
        </button>
      </form>
    </div>
  );
};

JoinCommunity.propTypes = {
  setStep: PropTypes.func,
};

export default JoinCommunity;
