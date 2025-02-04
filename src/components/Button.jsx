import PropTypes from "prop-types";
import { motion } from "motion/react";

const Button = ({ background, text, className, onClick }) => {
  const defaultBackground = background || "#8800FF";
  const defaultText = text || "Apply Now";
  return (
    <motion.div
      className={`rounded-[8.57px] py-[10px] px-[13.71px] text-white font-medium text-[12px] leading-[23.26px] select-none cursor-pointer ${className}`}
      style={{
        background: defaultBackground,
        boxShadow: "0px 3.43px 22.02px 0px #00000040",
      }}
      onClick={onClick}
      whileHover={{scale: 1.05}}
      whileTap={{scale: 0.9}}
    >
      {defaultText}
    </motion.div>
  );
};

export default Button;

Button.propTypes = {
  background: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
