import { Suspense, lazy } from "react";
import logo from "./assets/logos/logo.svg";

const Navbar = lazy(() => import("./components/Navbar"));
const Partners = lazy(() => import("./components/Partners"));
const SectionThree = lazy(() => import("./components/SectionThree"));
const Modal = lazy(() => import("./modals/Modal"));
const Communities = lazy(() => import("./components/Communities"));
const Hero = lazy(() => import("./components/Hero"));
const SectionFour = lazy(() => import("./components/SectionFour"));
const WhyBTH = lazy(() => import("./components/WhyBTH"));
const SectionSeven = lazy(() => import("./components/SectionSeven"));
const SectionEight = lazy(() => import("./components/SectionEight"));
const PresidentAndTutors = lazy(() =>
  import("./components/PresidentAndTutors")
);
const Footer = lazy(() => import("./components/Footer"));

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
      <WhyBTH />
      <Communities />
      <SectionSeven />
      <SectionEight />
      <PresidentAndTutors />
      <Footer />
    </Suspense>
  );
}

export default App;
