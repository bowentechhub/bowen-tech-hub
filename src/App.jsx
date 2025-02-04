import { Suspense, lazy } from "react";
import logo from "./assets/logos/logo.svg";
import SectionFive from "./sections/SectionFive";

const Navbar = lazy(() => import("./sections/Navbar"));
const Partners = lazy(() => import("./sections/Partners"));
const SectionThree = lazy(() => import("./sections/SectionThree"));
const Modal = lazy(() => import("./modals/Modal"));
const Communities = lazy(() => import("./sections/Communities"));
const Hero = lazy(() => import("./sections/Hero"));
const SectionFour = lazy(() => import("./sections/SectionFour"));
const SectionSeven = lazy(() => import("./sections/SectionSeven"));
const SectionEight = lazy(() => import("./sections/SectionEight"));
const PresidentAndTutors = lazy(() => import("./sections/PresidentAndTutors"));
const Footer = lazy(() => import("./sections/Footer"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="fixed h-screen w-screen flex justify-center items-center bg-white">
          <div className="animate-spin">
            <img src={logo} className="animate-pulse w-[100px] md:w-[150px]" />
          </div>
        </div>
      }
    >
      <Modal />
      <Navbar />
      <Hero />
      <Partners />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Communities />
      <SectionSeven />
      <SectionEight />
      <PresidentAndTutors />
      <Footer />
    </Suspense>
  );
}

export default App;
