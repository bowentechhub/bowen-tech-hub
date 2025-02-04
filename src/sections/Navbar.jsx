import { useEffect, useState } from "react";
import logo from "../assets/logos/logo.svg";
import Button from "../components/Button";
import { useModal } from "../hooks/useModal";

const Navbar = () => {
  const { openModal } = useModal();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 h-[60px] w-full z-50 flex items-center justify-center ${
        isScrolled ? "bg-black bg-opacity-25" : " bg-transparent"
      }`}
      style={{ backdropFilter: "blur(10px)" }}
    >
      <div className="w-[90%] flex items-center justify-between">
        <img src={logo} alt="bowen tech hub" className="h-[36.29px]" />
        <div className="hidden lg:flex items-center gap-[10vw]">
          <div className="flex gap-[2.3vw] text-white text-[14px] leading-5">
            <p className="cursor-pointer">About Us</p>
            <p className="cursor-pointer">Communities</p>
            <p className="cursor-pointer">Events</p>
            <p className="cursor-pointer">Resources</p>
            <p className="cursor-pointer">Contact Us</p>
          </div>
          <div className="flex gap-[28.28px] items-center">
            <Button onClick={openModal} />
            <Button background="#BDBDBD" text="Learn More" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
