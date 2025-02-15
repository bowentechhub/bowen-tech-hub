import { useEffect, useState } from "react";
import logo from "../assets/logos/logo.svg";
import Button from "../components/Button";
import { useModal } from "../hooks/useModal";
import { Link } from "react-scroll";
import { IoClose, IoMenu } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const { openModal } = useModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      <div
        className={`fixed top-0 h-[60px] w-full z-50 flex items-center justify-center ${
          isScrolled ? "bg-black bg-opacity-25" : "bg-transparent"
        }`}
        style={{ backdropFilter: "blur(20px)" }}
      >
        <div className="w-[90%] flex items-center justify-between">
          <Link to="hero" smooth={true}>
            <img
              src={logo}
              alt="bowen tech hub"
              className="h-[36.29px] cursor-pointer"
            />
          </Link>
          <div className="hidden lg:flex items-center gap-[10vw]">
            <div className="flex gap-[2.3vw] text-white text-[14px] leading-5">
              <Link offset={-60} to="about" smooth className="cursor-pointer">
                About Us
              </Link>
              <Link
                offset={-60}
                to="communities"
                smooth
                className="cursor-pointer"
              >
                Communities
              </Link>
              <Link offset={-60} to="events" smooth className="cursor-pointer">
                Events
              </Link>
              <Link
                offset={-60}
                to="resources"
                smooth
                className="cursor-pointer"
              >
                Resources
              </Link>
              <Link offset={-60} to="footer" smooth className="cursor-pointer">
                Contact Us
              </Link>
            </div>
            <div className="flex gap-[28.28px] items-center">
              <Button onClick={openModal} />
              <Button background="#BDBDBD" text="Learn More" />
            </div>
          </div>
          <div className="lg:hidden">
            {menuOpen ? (
              <IoClose
                size={24}
                color="#fff"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <IoMenu
                size={24}
                color="#fff"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            className="fixed left-0 top-[60px] bg-black bg-opacity-25 p-4  h-[calc(100dvh-60px)] w-full flex flex-col justify-between text-white z-[9999]"
            style={{ backdropFilter: "blur(20px)" }}
          >
            <div className="flex flex-col gap-6 text-[18px] text-start">
              <Link
                offset={-60}
                to="about"
                smooth
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                offset={-60}
                to="communities"
                smooth
                onClick={() => setMenuOpen(false)}
              >
                Communities
              </Link>
              <Link
                offset={-60}
                to="events"
                smooth
                onClick={() => setMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                offset={-60}
                to="resources"
                smooth
                onClick={() => setMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                offset={-60}
                to="footer"
                smooth
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
            <div className="flex gap-4 w-[80%]">
              <Button
                onClick={() => {
                  setMenuOpen(false);
                  openModal();
                }}
                className="w-full"
              />
              <Button
                background="#BDBDBD"
                text="Learn More"
                className="w-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
